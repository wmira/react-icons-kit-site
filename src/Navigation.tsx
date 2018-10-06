
import * as React from 'react'

import styled from 'styled-components'

import { Nav } from 'react-sidenav'
import { withRR4 } from 'react-sidenav/withRR4'
import { IIconSetMap } from './state'

const Section = styled.div`
    font-size: 0.9em;
    padding: 8px 14px;
    text-transform: uppercase;
    color: #247BA0;
    font-weight: bold;
`
const Text = styled.div`
    font-size: 0.9em;
`


const SideNav = withRR4()

export interface INavigationProps {
    iconsets: IIconSetMap
}



export const Navigation = (props: INavigationProps) => (
    <SideNav defaultSelectedPath={'guide'} theme={{selectionColor: '#1B98E0', hoverColor: '#1B98E0'}}>
        <Section>Main</Section>
        <Nav id={'guide'} payload={{to: '/guide'}}><Text>Installation and Usage</Text></Nav>
        <Section>Icons</Section>
        {
            Object.keys(props.iconsets).map( iconSet => {
                const { title, module } = props.iconsets[iconSet]
                return (
                    <Nav key={module} id={module} payload={{ to: `/iconset/${module}`}}>
                        <Text>{title}</Text>
                    </Nav>
                )
            })
        }        
    </SideNav>
)

