import React from 'react'
import ReactDOM from 'react-dom'
//to implement redux we have to import the provider from react-redux as follow

import { Provider } from 'react-redux'
import store from './store'
import './index.css'
import App from './App'

// import 'bootstrap/dist/css/bootstrap.min.css'
//after importing the Provider, it's time to pass it to the wrapper as follow-
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
