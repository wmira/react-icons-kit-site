
import * as React from 'react'
import { RouteComponentProps } from 'react-router';
import { Context, DispatchContext } from './state';
import { SET_SELECTED_ICONSET, SET_ICONSET_DATA, SetIconSetDataAction } from './reducer';
import { iconSetsLoaders } from './loadIconSets'
import { IconSet } from './IconSet';

/**
 * 
 * @param props 
 */
export const IconSetView: React.FC<RouteComponentProps> = (props) => {
  
  const context = React.useContext(Context)
  const dispatch = React.useContext(DispatchContext)

  const { match } = props
  const { params } = match
  const { iconSet: paramIconSet } = params as { iconSet: string }

  React.useEffect(
    React.useCallback(() => {
      const loadIconSet = async () => {            
        const iconSetLoader = iconSetsLoaders[paramIconSet]
        const iconSetData = await iconSetLoader()                
        dispatch<SetIconSetDataAction>({ type: SET_ICONSET_DATA, payload: { iconSet: paramIconSet, data: iconSetData }  })
        
      }  
      if ( context.selectedIconSet !== paramIconSet ) {
        dispatch({ type: SET_SELECTED_ICONSET, payload: paramIconSet })
        loadIconSet()
      }

    },
    [context.selectedIconSet, paramIconSet])
    ,
    [context.selectedIconSet, paramIconSet]
  )
  if ( context.selectedIconSet ) {
    return (
      <IconSet />
    )
  }

  return null

}