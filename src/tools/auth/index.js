/*******************************************************************************
  auth
--------------------------------------------------------------------------------
  Tools for user authentiation.
*******************************************************************************/

/*//////////////////////////////////////
  exports : qualified short-names
//////////////////////////////////////*/
import authios from './authios'
import user from './user'
import storage from './storage'

export default {
  authios,
  user,
  storage,
}

/*//////////////////////////////////////
  exports : unqualified full-names
//////////////////////////////////////*/
export { default as authios } from './authios'
export { default as user } from './user'
export { default as storage } from './storage'
