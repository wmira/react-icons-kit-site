import { IAppState } from "./state";

export const SET_SELECTED_ICONSET = 'setSelectedIconSet'
export const SET_ICONSET_DATA = 'setIconSetData'
export const SET_SELECTED_ICON_FROMSET = 'setSelectedIconFromSet'

export type Action<T, P = {}> = { type: T, payload: P }

interface ISetIconSetDataP {
  iconSet: string
  data: { [key: string]: any }
}

interface ISetSelectedIconFromSetP {
  iconSet: string
  selectedIcon: string
}

export type SetIconSetDataAction = Action<typeof SET_ICONSET_DATA, ISetIconSetDataP>
export type SetSelectedIconSetAction = Action<typeof SET_SELECTED_ICONSET, string>
export type SetSelectedIconFromSet = Action<typeof SET_SELECTED_ICON_FROMSET, ISetSelectedIconFromSetP>

export const reducer = (state: Readonly<IAppState>, action: Readonly<Action<any>>): IAppState => {

  const { type } = action

  if ( type === SET_SELECTED_ICONSET ) {    
    const { payload: selectedIconSet } = action as SetSelectedIconSetAction    
    return { ...state, selectedIconSet }
  }

  if ( type === SET_ICONSET_DATA ) {
    const { payload: setIconSetDataPayload } = action as SetIconSetDataAction

    return {
      ...state,
      loadedIconSetData: {
        ...state.loadedIconSetData,
        [setIconSetDataPayload.iconSet]: setIconSetDataPayload.data
      }
    }
  }

  if ( type === SET_SELECTED_ICON_FROMSET ) {
    const { payload: setSelectedIconFromSet } = action as SetSelectedIconFromSet    
    return {
      ...state,
      selectedIconFromSet: {
        ...state.selectedIconFromSet,
        [setSelectedIconFromSet.iconSet]: setSelectedIconFromSet.selectedIcon
      }
    }
  }

  return state

}