import act from 'states/act'
import actions from './actions'
import { authios } from 'tools/auth'
import { server } from 'routes'

/***************************************
  tools
***************************************/

const _flag = (...things) => console.log (`>>> ${things.join (' : ')} <<<`)

  const flag = (...rest) => _flag ('serverRequest', actionPrefix, ...rest)

  flag ('try')
  dispatch (act (actions[actionPrefix + '_TRY']))

  authios ()
    [reqType] (...args)
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

/***************************************
  MAIN
***************************************/

/// auth ///

export const signUp = (data) => (dispatch) => {
  serverRequest (dispatch) ('post', 'SIGN_UP', server.ends.signup.POST (), data)
}

export const signIn = (data) => (dispatch) => {
  serverRequest (dispatch) ('post', 'SIGN_IN', server.ends.signin.POST (), data)
}

export const signOut = (data) => (dispatch) => {
  serverRequest (dispatch) ('post', 'SIGN_OUT', server.ends.signout.POST (), data)
}

/// all users -- stretch ///

export const getUsers = () => (dispatch) => {}

/// all graphs -- stretch ///

export const getGraphs = () => (dispatch) => {}

/// user ///

export const getUser = (id) => (dispatch) => {
  serverRequest (dispatch) ('get', 'GET_USER', server.ends.user.GET (id))
}

/// user graphs ///

export const getUserGraphs = (id) => (dispatch) => {
  serverRequest (dispatch) ('get', 'GET_USER_GRAPHS', server.ends.user_graphs.GET (id))
  console.log('called get graphs thunk');
}

/// graph ///

export const postGraph = (data) => (dispatch) => {
  serverRequest (dispatch) ('post', 'POST_GRAPH', server.ends.graph.POST (), data)
}

export const getGraph = (id) => (dispatch) => {
  serverRequest (dispatch) ('get', 'GET_GRAPH', server.ends.graph.GET (id))
}

export const putGraph = (id, data) => (dispatch) => {
  serverRequest (dispatch) ('put', 'PUT_GRAPH', server.ends.graph.PUT (id), data)
}

export const deleteGraph = (id) => (dispatch) => {
  serverRequest (dispatch) ('delete', 'DELETE_GRAPH', server.ends.graph.DELETE (id))
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
