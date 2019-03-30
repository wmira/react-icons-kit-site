import * as React from 'react'
import { Action } from './reducer'
export enum IconSetEnum {
    icomoon = 'icomoon',
    md = 'md',
    fa = 'fa',
    iconic = 'iconic',
    entypo = 'entypo',
    metrize = 'metrize',
    ikons = 'ikons',
    linea = 'linea',
    ionicons = 'ionicons',
    oct = 'oct',
    typicons = 'typicons',
    noto_emoji_regular = 'noto_emoji_regular',
    feather = 'feather'    
}

export const ICON_SETS: IIconSetMap = {
    [IconSetEnum.icomoon]: { module: 'icomoon', title: 'IcoMoon' },
    [IconSetEnum.md]: { module: 'md', title: 'Material Design' },
    [IconSetEnum.fa]: { module: 'fa', title: 'FontAwesome' },
    [IconSetEnum.iconic]: { module: 'iconic', title: 'Ionic' },
    [IconSetEnum.entypo]: { module: 'entypo', title: 'Entypo' },
    [IconSetEnum.metrize]: { module: 'metrize', title: 'Metrize' },
    [IconSetEnum.ikons]: { module: 'ikons', title: 'Ikons' },
    [IconSetEnum.linea]: { module: 'linea', title: 'Linea' },
    [IconSetEnum.ionicons]: { module: 'ionicons', title: 'Ionics' },
    [IconSetEnum.oct]: { module: 'oct', title: 'Octicons' },
    [IconSetEnum.typicons]: { module: 'typicons', title: 'Typicons' },
    [IconSetEnum.noto_emoji_regular]: { module: 'noto_emoji_regular', title: 'Noto Emoji Regular' },
    [IconSetEnum.feather]: { module: 'feather', title: 'Feathericons' }
}

export interface IIconSet {
    module: string,
    title: string
}

export interface IIconSetMap {
    [key: string]: IIconSet
}

export interface IAppState {
    iconsets: IIconSetMap
    selectedIconSet: string
    loadedIconSetData: { [ key: string ]: any } 
    selectedIconFromSet: { [key: string]: string }
}

export const INITIAL_STATE: IAppState = {
    iconsets: ICON_SETS,
    selectedIconSet: '', 
    loadedIconSetData: {}, 
    selectedIconFromSet: {} 
}

export type Dispatch = <A>(action: A) => void

export const DispatchContext = React.createContext<Dispatch>(null as any)
export const Context = React.createContext<IAppState>(null as any as IAppState)