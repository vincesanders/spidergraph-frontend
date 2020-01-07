/*******************************************************************************
  __ModuleName__
--------------------------------------------------------------------------------
  __ModuleDescription__
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import actions from './actions'
import reducer from './reducer'
import createStore from './createStore'
import initialState from './initialState'
import exampleState from './exampleState'

export default {
  actions,
  reducer,
  createStore,
  initialState,
  exampleState,
}

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export { default as actions } from './actions'
export { default as reducer } from './reducer'
export { default as createStore } from './createStore'
export { default as initialState } from './initialState'
export { default as exampleState } from './exampleState'
