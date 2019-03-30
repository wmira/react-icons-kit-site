
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createApp } from './createApp'
import './index.css'

const app: React.ReactElement<any> = createApp()

ReactDOM.render(
  app,
  document.getElementById('root') as HTMLElement
);
