import act from 'states/act'
import actions from './actions'
import { authios } from 'tools/auth'
import { server } from 'routes'

/***************************************
  tools
***************************************/

const _flag = (...things) => console.log (`>>> ${things.join (' : ')} <<<`)

const serverRequest = (dispatch) => (actionPrefix, requestType, requestPath, ...args) => {
  const flag = (...rest) => _flag ('serverRequest', actionPrefix, ...rest)

  flag ('try')
  dispatch (act (actions[actionPrefix + '_TRY']))

  authios ()
    [requestType] (requestPath, ...args)
    .then ((res) => {
      flag ('success')
      console.log (res)

      dispatch (act (actions[actionPrefix + '_SUCCESS'], res))
    })
    .catch ((err) => {
      flag ('failure')
      console.log (err)

      dispatch (act (actions[actionPrefix + '_FAILURE'], err))
    })
}

const fakeRequest = (dispatch) => (actionPrefix, requestType, requestPath, ...args) => {
  const flag = (...rest) => _flag ('fakeRequest', actionPrefix, ...rest)

  flag ('try')
  dispatch (act (actions[actionPrefix + '_TRY']))

  try {
    const res = { status : 'ok' }

    flag ('success')
    console.log (res)

    dispatch (act (actions[actionPrefix + '_SUCCESS'], res))
  }
  catch (err) {
    flag ('failure')
    console.log (err)

    dispatch (act (actions[actionPrefix + '_FAILURE'], err))
  }
}

/***************************************
  MAIN
***************************************/

/// auth ///

export const signUp = (data) => (dispatch) => {
  serverRequest (dispatch) ('SIGN_UP', 'post', server.ends.signup.POST (), data)
}

export const signIn = (data) => (dispatch) => {
  serverRequest (dispatch) ('SIGN_IN', 'post', server.ends.signin.POST (), data)
}

export const signOut = (data) => (dispatch) => {
  /// this isn't a real serverRequest -- yet? ///
  fakeRequest (dispatch) ('SIGN_OUT', 'post', server.ends.signout.POST (), data)
}

/// all users -- stretch ///

export const getUsers = () => (dispatch) => {}

/// all graphs -- stretch ///

export const getGraphs = () => (dispatch) => {}

/// user ///

export const getUser = (id) => (dispatch) => {
  serverRequest (dispatch) ('GET_USER', 'get', server.ends.user.GET (id))
}

/// user graphs ///

export const getUserGraphs = (id) => (dispatch) => {
  serverRequest (dispatch) ('GET_USER_GRAPHS', 'get', server.ends.user_graphs.GET (id))
}

/// graph ///

export const postGraph = (data) => (dispatch) => {
  serverRequest (dispatch) ('POST_GRAPH', 'post', server.ends.graph.POST (), data)
}

export const getGraph = (id) => (dispatch) => {
  serverRequest (dispatch) ('GET_GRAPH', 'get', server.ends.graph.GET (id))
}

export const putGraph = (id, data) => (dispatch) => {
  serverRequest (dispatch) ('PUT_GRAPH', 'put', server.ends.graph.PUT (id), data)
}

export const deleteGraph = (id) => (dispatch) => {
  serverRequest (dispatch) ('DELETE_GRAPH', 'delete', server.ends.graph.DELETE (id))
}

/**************************************/

export default {
  /// auth ///
  signUp,
  signIn,
  signOut,
  /// all users -- stretch ///
  getUsers,
  /// all graphs -- stretch ///
  getGraphs,
  /// user ///
  getUser,
  /// user graphs ///
  getUserGraphs,
  /// graph ///
  postGraph,
  getGraph,
  putGraph,
  deleteGraph,
}
