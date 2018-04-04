// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// // import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import './index.css';
// import Hello from './components/Hello';

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// ReactDOM.render(
  
//   <Hello name="TypeScript" enthusiasmLevel={10} />,
//   document.getElementById('root') as HTMLElement
// );
// registerServiceWorker();
