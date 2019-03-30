import * as React from 'react'
import styled from 'styled-components'
import { Center, InlineItems, LeftRightSection as BLeftRightSection } from 'react-containers'
import { match as MatchType} from 'react-router'
import { Route, Switch } from 'react-router-dom'

import { AppContainer, Body, Header, HeaderText, Nav } from './AppContainer'
import { Guide } from './Guide'
import { Navigation } from './Navigation'
import { Dispatch, INITIAL_STATE } from './state'

const LeftRightSection = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
}
`

const BASE_APP_URL = `https://github.com/wmira/react-icons-kit`

export interface IIconSetMatchProps {
  match: MatchType<{iconSet: string}>
}

import { Context, DispatchContext } from './state'
import { reducer } from './reducer'
import { IconSetView } from './IconSetView';

export const App: React.FC = () => {
  
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
  
  return (
    <Context.Provider value={state}>
      <DispatchContext.Provider value={dispatch as Dispatch}>
        <AppContainer>
          <Header>
            <LeftRightSection style={{height: '100%'}}>
                <div><Center><HeaderText>React Icons Kit</HeaderText></Center></div>
                <div>
                  <Center>
                    <InlineItems>                                        
                      <a className="github-button" href={`${BASE_APP_URL}`} 
                        data-icon="octicon-star" 
                        data-size="large" 
                        data-show-count="true" 
                      aria-label="Star wmira/react-icons-kit on GitHub">Star</a>
                      <a className="github-button" href={`${BASE_APP_URL}/fork`} 
                        data-icon="octicon-repo-forked" data-size="large" 
                        data-show-count="true" 
                        aria-label="Fork wmira/react-icons-kit on GitHub">Fork</a>
                    </InlineItems>
                  </Center>
                </div>
            </LeftRightSection>
          </Header>
          <Nav>
            <Navigation iconsets={state.iconsets}/>
          </Nav>
          <Body>
            <Switch>                
                <Route exact={true} path='/' component={Guide}/>
                <Route exact={true} path='/guide' component={Guide}/>
                <Route exact={true} path='/iconset/:iconSet' component={IconSetView}/>
              </Switch>
          </Body>
        </AppContainer>  
      </DispatchContext.Provider>  
    </Context.Provider>
  )
}

// export class App extends Component<{}, IAppState> {
  
//   constructor(props: {}) {
//     super(props)
//     this.state = INITIAL_STATE
//   }

  
//   public render() {

//     return (
//       <AppContainer>
//           <Header>
//             <LeftRightSection>
//                 <div><Center><HeaderText>React Icons Kit</HeaderText></Center></div>
//                 <div>
//                   <Center>
//                     <InlineItems>                                        
//                       <a className="github-button" href={`${BASE_APP_URL}`} 
//                         data-icon="octicon-star" 
//                         data-size="large" 
//                         data-show-count="true" 
//                         aria-label="Star wmira/react-icons-kit on GitHub">Star</a>
//                       <a className="github-button" href={`${BASE_APP_URL}/fork`} 
//                         data-icon="octicon-repo-forked" data-size="large" 
//                         data-show-count="true" 
//                         aria-label="Fork wmira/react-icons-kit on GitHub">Fork</a>
//                     </InlineItems>
//                   </Center>
//                 </div>
//             </LeftRightSection>
//           </Header>
//           <Nav>
//             <Navigation iconsets={this.state.iconsets}/>
//           </Nav>
//           <Body>
//             <Switch>                
//                 <Route exact={true} path='/' component={Guide}/>
//                 <Route exact={true} path='/guide' component={Guide}/>
//                 <Route exact={true} path='/iconset/:iconSet' render={this.renderIconSet}/>
//               </Switch>
//           </Body>
//       </AppContainer>
//     )
//   }

//   private loadIconSetData = (iconSet: string) => {
//     const loader: AsyncIconsLoader = iconSetsLoaders[iconSet]
//     loader()
//       .then( (data:any) => {
//         const loadedIconSetData = this.state.loadedIconSetData[iconSet] as any
//         this.setState({ ...this.state, loadedIconSetData: { ...loadedIconSetData, [iconSet]: data } })
//       })
//   }

//   private onIconSelected = (iconSelected: string, iconSet: string) => {
    
//     const { selectedIconFromSet } = this.state    
//     const newSelectedIconFromSet = { ...selectedIconFromSet,  [iconSet]: iconSelected }    
//     this.setState({ ...this.state, selectedIconFromSet: newSelectedIconFromSet })
//   }

//   private renderIconSet = (routerProps: IIconSetMatchProps): React.ReactElement<IconSetEnum> => {    
//     const { match } = routerProps
//     const { params } = match
//     const { iconSet } = params
    
//     const loadedIconSetData = this.state.loadedIconSetData[iconSet]
//     if ( !loadedIconSetData ) {
//       this.loadIconSetData(iconSet)
//     }

//     return ( 
//       <IconSet 
//               selectedIcon={this.state.selectedIconFromSet[iconSet] || ''} 
//               onIconSelected={this.onIconSelected} 
//               iconSet={iconSet} 
//               iconSetData={this.state.loadedIconSetData[iconSet]} />
//     )
//   }
// }

export default App
