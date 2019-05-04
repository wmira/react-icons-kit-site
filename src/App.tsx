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
`

export interface IIconSetMatchProps {
  match: MatchType<{iconSet: string}>
}

import { Context, DispatchContext } from './state'
import { reducer } from './reducer'
import { IconSetView } from './IconSetView';
import { GithubInfo } from './GithubInfo';

export const App: React.FC = () => {
  
  const [state, dispatch] = React.useReducer(reducer, INITIAL_STATE)
  
  return (
    <Context.Provider value={state}>
      <DispatchContext.Provider value={dispatch as Dispatch}>
        <AppContainer>
          <Header>
            <LeftRightSection style={{height: '100%'}}>
                <div><Center><HeaderText>React Icons Kit</HeaderText></Center></div>
                <GithubInfo/>
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


export default App
