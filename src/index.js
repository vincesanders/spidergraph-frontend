/// external modules ///
import React from 'react'
import ReactDOM from 'react-dom'
import * as redux from 'redux'
import * as ReactRedux from 'react-redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

/// components ///
import App from './App'

/// states ///
import spider from 'states/spider-graph';

/// tools ///
import { user } from 'tools/auth'

/// styles ///
import 'reset-css/reset.css'
import 'normalize-css/normalize.css'
import 'styles/basics.css'
import 'styles/index.css'

/***************************************
  MAIN
***************************************/

// /// fake user -- FOR TESTING ONLY
// user.token.set ('example')
// user.isAllowed.set ('y')
// ///

const spiderStore = spider.createStore (
  composeWithDevTools (redux.applyMiddleware (thunk, logger))
)

ReactDOM.render (
  <ReactRedux.Provider store={spiderStore}>
    <App/>
  </ReactRedux.Provider>
, document.getElementById ('root')
)

/**************************************/
