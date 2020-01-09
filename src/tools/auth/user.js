import storage from './storage'

/// helpers ///
const ns = (key) => `${storage.namespace}.user.${key}`

/// user isAllowed ///
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

/// user data ///
const setData = (data) => {
  storage.media.setItem (ns ('data'), JSON.stringify(data))
}
const getData = () => {
  return (
    JSON.parse (storage.media.getItem (ns ('data')))
  )
}
const clearData = () => {
  storage.media.removeItem (ns ('data'))
}

///
export default {
  isAllowed : {
    set : setIsAllowed,
    get : getIsAllowed,
    clear : clearIsAllowed,
  },
  token : {
    set : setToken,
    get : getToken,
    clear : clearToken,
  },
  data : {
    set : setData,
    get : getData,
    clear : clearData,
  },
  clear : () => {
    clearIsAllowed ()
    clearToken ()
    clearData ()
  },
}
