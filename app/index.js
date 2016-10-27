import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import getRoutes from 'config/routes'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { routerReducer, syncHistoryWithStore, routerMiddleware } from 'react-router-redux'
import * as reducers from 'redux/modules'
import { hashHistory } from 'react-router'

const routeMW = routerMiddleware(hashHistory)

const store = createStore(combineReducers({...reducers, routing: routerReducer}),
  compose(applyMiddleware(thunk, routeMW))
)

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    {getRoutes(history)}
  </Provider>,
  document.getElementById('app')
)

