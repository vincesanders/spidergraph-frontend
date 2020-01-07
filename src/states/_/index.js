/*******************************************************************************
  __ModuleName__
--------------------------------------------------------------------------------
  __ModuleDescription___
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import initialState from './initialState'
import exampleState from './exampleState'
import context from './context'
import actions from './actions'
import reducer from './reducer'
import store from './store'

export default {
  initialState,
  exampleState,
  context,
  actions,
  reducer,
  store,
}

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export { default as initialState } from './initialState'
export { default as exampleState } from './exampleState'
export { default as context } from './context'
export { default as actions } from './actions'
export { default as reducer } from './reducer'
export { default as store } from './store'
