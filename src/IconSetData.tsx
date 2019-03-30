
import * as React from 'react'
import { IconSetContainer, IconView, SelectedIconView } from './Containers'
import { Icon } from 'react-icons-kit'

import { Context, DispatchContext } from './state';
import { SetSelectedIconFromSet, SET_SELECTED_ICON_FROMSET } from './reducer';

interface IconContainerProps {
  iconData: any
  iconName: string
  iconSet: string
  selectedIcon: string
  onClick?: ((event: React.MouseEvent<HTMLDivElement>) => void)
}

const getSelectionData = (target: HTMLDivElement): { selectedIcon: string, iconSet: string } | undefined  => {
                
  let targetWithData: HTMLElement | null = target

  while ( targetWithData ) {
      
    if ( targetWithData.getAttribute('data-icon') ) {
        break
    }
    targetWithData = targetWithData.parentElement
  }

  if ( targetWithData ) {
    const selectedIcon = targetWithData.getAttribute('data-icon')
    const iconSet = targetWithData.getAttribute('data-iconset')
    if ( selectedIcon && iconSet ) {
      return { selectedIcon, iconSet }
    }
  }
  return  undefined
    
}

const IconContainer = (props: IconContainerProps) => {
  const IconViewContainer = props.iconName === props.selectedIcon ? SelectedIconView : IconView 

  return (
      <IconViewContainer onClick={props.onClick} data-icon={props.iconName} data-iconset={props.iconSet}>        
        <div><Icon size={32} icon={props.iconData} /></div>
        <div style={{paddingTop: 4, fontSize: 10}}>{props.iconName}</div>
      </IconViewContainer>
  )
}

export const IconSetData = () => {
  const context = React.useContext(Context)
  const dispatch = React.useContext(DispatchContext)

  const onIconSelected = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement> ) => {
      console.log('on icon clicked')
      const selection = getSelectionData(e.currentTarget)
      if ( selection ) {        
        dispatch<SetSelectedIconFromSet>({ type: SET_SELECTED_ICON_FROMSET, payload: selection })
      }
    },
    [ 
      context.selectedIconSet, 
      context.loadedIconSetData[context.selectedIconSet], 
      context.selectedIconFromSet[context.selectedIconSet] 
    ]
  )
  
  const { loadedIconSetData, selectedIconSet } = context
  const iconSetData = loadedIconSetData[selectedIconSet] || {}

  if ( iconSetData && Object.keys(iconSetData).length > 0 ) {
    return (            
        <IconSetContainer>
            { Object.keys(iconSetData).map( icon => {

                return (
                    <IconContainer 
                      onClick={onIconSelected}
                      selectedIcon={context.selectedIconFromSet[context.selectedIconSet]}                        
                      key={icon} 
                      iconName={icon} 
                      iconSet={selectedIconSet}
                      iconData={iconSetData[icon]} />
                )
            })}
        </IconSetContainer>
    )
  }
  return <div>Please Wait...Loading IconSet Data.</div>
}