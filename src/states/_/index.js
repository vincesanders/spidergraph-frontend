/*******************************************************************************
  __ModuleName__
--------------------------------------------------------------------------------
  __ModuleDescription___
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import init from './init';
import context from './context';
import actions from './actions';
import reducer from './reducer';
import store from './store';

export default {
  init,
  context,
  actions,
  reducer,
  store,
};

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export { default as init } from './init';
export { default as context } from './context';
export { default as actions } from './actions';
export { default as reducer } from './reducer';
export { default as store } from './store';
