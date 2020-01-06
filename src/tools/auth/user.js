import storage from './storage'

/// helpers ///
const ns = (key) => `${storage.namespace}.user.${key}`

/// user token ///
const setToken = (token) => {
  storage.media.setItem (ns ('token'), token)
}
const getToken = () => {
  return (
    storage.media.getItem (ns ('token'))
  )
}
const clearToken = () => {
  storage.media.removeItem (ns ('token'))
}

/// user allowed ///
const setIsAllowed = (isAllowed) => {
  storage.media.setItem (ns ('isAllowed'), isAllowed ? 'y' : 'n')
}
const getIsAllowed = () => {
  return (
    storage.media.getItem (ns ('isAllowed')) === 'y' ? true : false
  )
}
const clearIsAllowed = () => {
  storage.media.removeItem (ns ('isAllowed'))
}

///
export default {
  token : {
    set : setToken,
    get : getToken,
    clear : clearToken,
  },
  isAllowed : {
    set : setIsAllowed,
    get : getIsAllowed,
    clear : clearIsAllowed,
  },
  clear : () => {
    clearToken ()
    clearIsAllowed ()
  },
}
