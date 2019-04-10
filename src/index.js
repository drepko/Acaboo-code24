// old code ***********
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import store from './store'
// import {Provider} from 'react-redux'
// import createAppStore from './store'

// ReactDOM.render(
// 	<Provider store={store}>
// 	  <App />
// 	</Provider>,
// 	document.getElementById('root')
//   );
	
// new code ***********
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import createAppStore from './store'
import { PersistGate } from 'redux-persist/es/integration/react'

const { persistor, store } = createAppStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
document.getElementById('root'))
