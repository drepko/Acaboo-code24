// old code ***********
// import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
// import ReduxThunk from 'redux-thunk'
// import reducers from './reducers/index' // which is shorthand for import ./reducers/index.js => here it is 'import ./reducers/'

// const reducer = combineReducers(reducers)

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

// const enhancer = compose(
// 	applyMiddleware(ReduxThunk),
// 	devTools
// )

// const store = createStore(reducer, enhancer)

// export default store

// new code ***********
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import reducer from './reducers'

const loggerMiddleware = createLogger()

const middleware = [thunk, loggerMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = composeEnhancers(
  applyMiddleware(...middleware),
)(createStore)

const config = {
  key: 'root',
  storage,
}

const combinedReducer = persistCombineReducers(config, reducer)

const createAppStore = () => {
  let store = configureStore(combinedReducer)
  let persistor = persistStore(store)

  return { persistor, store }
}

export default createAppStore