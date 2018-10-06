
import * as React from 'react'
import {
    LiveEditor,
    LiveError,
    LivePreview,
    LiveProvider
  } from 'react-live'
import styled from 'styled-components'
import { Colors } from './colors'

const StyledProvider = styled(LiveProvider)`    
    overflow: hidden;    
    margin: 0 auto;    
`

const LiveWrapper = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: stretch;
    width: 80%;    
`

const StyledEditor = styled(LiveEditor)`    
    font-size: 0.8em;    
    height: ${props => props.height ? props.height : '240px'};
    overflow: auto;
    border: 1px solid #C5C3C6;
    width: 520px;
    background-color: ${Colors.foreground} !important;
`

const StyledPreview = styled(LivePreview)`
    position: relative;
    padding: 0.5rem;        
    height: auto;
    overflow: hidden;  
    width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

const Text = styled.div`
  font-size: 0.9em;
`

export const Editor = (props: IEditorProps) => (
    <StyledProvider
        code={props.code}
        scope={props.scope}>
        <LiveWrapper>
            <Flex>
                <Text>Live Editor</Text>
                <StyledEditor height={props.height}/>
            </Flex>
            <StyledPreview/>
        </LiveWrapper>
        <LiveError/>
    </StyledProvider>
)

export interface IEditorProps {
    code: string
    scope: { [key: string]: object }
    height?: string
}