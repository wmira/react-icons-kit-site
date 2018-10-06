
import * as React from 'react'
import { ReactElement } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'

export const createApp = (): ReactElement<Router> => {

    return (       
        <Router basename="/react-icons-kit">
            <Route path='/' component={App} />
        </Router>          
    )
}