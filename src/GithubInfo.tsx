import * as React from 'react'
import { Center, InlineItems } from 'react-containers'
const BASE_APP_URL = `https://github.com/wmira/react-icons-kit`

export const GithubInfo = () => {
  return (
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
  )
}