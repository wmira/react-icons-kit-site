
// import 'prismjs/components/prism-javascript'
// import 'prismjs/components/prism-jsx'
// import 'prismjs/components/prism-markup'
// import 'prismjs/themes/prism-tomorrow.css'
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createApp } from './createApp'
import './index.css'
import registerServiceWorker from './registerServiceWorker';

const App: React.ReactElement<any> = createApp()

ReactDOM.render(
  App,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
