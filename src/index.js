import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import 'tachyons'

import './index.css'
import App from './containers/App'
import { searchTermReducer, requestRobotsReducer } from './reducers'

import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

const logger = createLogger({
  collapsed: true,
})

const rootReducer = combineReducers({
  searchTerm: searchTermReducer,
  requestRobots: requestRobotsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// setup the tests
// import { setupTests } from './setupTests'

// setupTests()
