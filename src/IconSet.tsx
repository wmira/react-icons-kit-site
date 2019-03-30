

import * as React from 'react'

import { Icon } from 'react-icons-kit'
import styled from 'styled-components'
import { IconCodeContainer, IconTitle } from './Containers'
import { ICON_SETS, Context } from './state'

import { ic_content_copy as copyIcon } from 'react-icons-kit/md/ic_content_copy'
import { IconSetData } from './IconSetData';

import copy from 'copy-to-clipboard'

const CodeContainer = styled.div`
  font-size: 0.8em;
  display: flex;
  justify-content: left;
  align-items: center;
`

const CopyContainer = styled.div`
  padding-left: 6px;
  padding-top: 4px;
  cursor: pointer;
`

export const IconSet: React.FC = (props) => {
  const context = React.useContext(Context)

  const { selectedIconSet = '', selectedIconFromSet = {}, loadedIconSetData = {} } = context
  const iconSet = ICON_SETS[context.selectedIconSet]
  const title = iconSet ? iconSet.title : ''

  const onCopy = () => {
    const importStmt = `import {${selectedIconFromSet[selectedIconSet]}} from 'react-icons-kit/${selectedIconSet}/${selectedIconFromSet[selectedIconSet]}'`
    copy(importStmt)
  }
  if ( selectedIconSet ) {
    const hasSelectedIcon = Boolean(selectedIconFromSet[selectedIconSet])
    return (            
      <div>                
          <IconCodeContainer>              
              <div><IconTitle>{ title } </IconTitle></div>
              { hasSelectedIcon ? <CodeContainer>                        
                  <code>{`import {${selectedIconFromSet[selectedIconSet]}} from 'react-icons-kit/${selectedIconSet}/${selectedIconFromSet[selectedIconSet]}'`}</code>
                  <CopyContainer><Icon onClick={onCopy} icon={copyIcon} size={16}/></CopyContainer>
              </CodeContainer>  : 'Select an icon' }          
          </IconCodeContainer>
          <div style={{marginTop: 100 }}>
            <IconSetData />
          </div>
      </div>
    )
  }

  return null
}

export interface IIconSetProp {

    onIconSelected: (iconName: string, iconSet: string) => void    
}