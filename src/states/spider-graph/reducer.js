/// tools ///
import _ from 'lodash'
import { hasIn, getIn, setIn, updateIn } from 'immutable'
import hi from 'tools/hi'

/// internal modules ///
import initialState, {
  initSpider,
} from './initialState'
import actions from './actions'

/***************************************
  tools
***************************************/

/*--------------------------------------
  reshapeList
  - reshape (or reorder) a list with array of indices
--------------------------------------*/
const reshapeList = (list, shape) => (
  shape.map ((i) => (list[i]))
)

/*--------------------------------------
  seqHasIn
  - hacky sequential immutable.hasIn
--------------------------------------*/
const seqHasIn = (obj, ...seq /* (keyPath,)+ */) => {
  return _.map (
    seq, (keyPath) => (hasIn (obj, keyPath))
  )
}

/*--------------------------------------
  seqGetIn
  - hacky sequential immutable.getIn
--------------------------------------*/
const seqGetIn = (obj, ...seq /* (keyPath, noSetValue,)+ */) => {
  return _.map (
    _.chunk (seq, 2),
    ([ keyPath, noSetValue ]) => (getIn (obj, keyPath, noSetValue))
  )
}

/*--------------------------------------
  seqSetIn
  - hacky sequential immutable.setIn
--------------------------------------*/
const seqSetIn = (obj, ...seq /* (keyPath, value,)+ */) => {
  return _.reduce (
    _.chunk (seq, 2),
    (o, [ keyPath, value ]) => (setIn (o, keyPath, value)),
    obj
  )
}

/*--------------------------------------
  seqUpdateIn
  - hacky sequential immutable.updateIn
--------------------------------------*/
const seqUpdateIn = (obj, ...seq /* (keyPath, updater,)+ */) => {
  return _.reduce (
    _.chunk (seq, 2),
    (o, [ keyPath, updater ]) => (updateIn (o, keyPath, updater)),
    obj
  )
}

/*--------------------------------------
  reshapeList
  - reshape (or reorder) a list with array of indices
--------------------------------------*/
const reshapeList = (list, shape) => (
  shape.map ((i) => (list[i]))
)

/***************************************
  MAIN
----------------------------------------
  - reducer : state reducer
***************************************/

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  let newState = {}

  /// do it! ///
  try {
    /// actions ///
    switch (type) {

      /// CLIENT ///

      /// CLIENT / TABS ///

      case (actions.ADD_GRAPH) :
        // payload : void
        newState = {
          ...state,
          currentSpider : state.openedSpiders.length,
          openedSpiders : [
            ...state.openedSpiders,
            initSpider (),
          ],
        }
        return (newState)

      case (actions.OPEN_GRAPH) :
        // payload : index of openedopenedSpiders
        newState = {
          ...state,
          currentSpider : payload,
        }
        return (newState)

      case (actions.CLOSE_GRAPH) :
        // payload : index of openedopenedSpiders
        return (newState)

      case (actions.REORDER_SAVED_GRAPHS) :
        // payload : index list
        return (newState)

      case (actions.REORDER_OPENED_GRAPHS) :
        // payload : index list
        return (newState)

      /// CLIENT / CURRENT GRAPH ///

      case (actions.EDIT_GRAPH_TITLE) :
        // payload : edited title
        newState = {
          ...state,
          openedSpiders : Array.from (Object.values ({
            ...state.openedSpiders,
            [state.currentSpider] : {
              ...state.openedSpiders[state.currentSpider],
              title : payload,
            },
          })),
        }
        return (newState)

      case (actions.EDIT_GRAPH_NOTES) :
        // payload : edited notes
        newState = {
          ...state,
          openedSpiders : Array.from (Object.values ({
            ...state.openedSpiders,
            [state.currentSpider] : {
              ...state.openedSpiders[state.currentSpider],
              notes : payload,
            },
          })),
        }
        return (newState)

      case (actions.EDIT_GRAPH_THEME) :
        // payload : edited theme
        newState = {
          ...state,
          openedSpiders : Array.from (Object.values ({
            ...state.openedSpiders,
            [state.currentSpider] : {
              ...state.openedSpiders[state.currentSpider],
              theme : payload,
            },
          })),
        }
        return (newState)

      case (actions.EDIT_GRAPH_SCALE) :
        // payload : edited scale
        newState = {
          ...state,
          openedSpiders : Array.from (Object.values ({
            ...state.openedSpiders,
            [state.currentSpider] : {
              ...state.openedSpiders[state.currentSpider],
              scale : payload,
            },
          })),
        }
        return (newState)

      case (actions.ADD_GRAPH_ARM) :
        return (newState)

      case (actions.EDIT_GRAPH_ARM) :
        return (newState)

      case (actions.DELETE_GRAPH_ARM) :
        return (newState)

      case (actions.ADD_GRAPH_DATASET) :
        return (newState)

      case (actions.EDIT_GRAPH_DATASET) :
        return (newState)

      case (actions.DELETE_GRAPH_DATASET) :
        return (newState)

      case (actions.REORDER_GRAPH_ARMS) :
        return (newState)

      case (actions.REORDER_GRAPH_DATASETS) :
        return (newState)

      /// SERVER ///

      /// SERVER / AUTH ///

      case (actions.SIGN_UP) :
        return (state)

      case (actions.SIGN_UP_TRY) :
        newState = {
          ...state,
          events : {
            ...state.events,
            signUp : 'try',
          }
        }
        return (state)

      case (actions.SIGN_UP_SUCCESS) :
        newState = {
          ...state,
          events : {
            ...state.events,
            signUp : 'success',
          }
        }
        return (state)

      case (actions.SIGN_UP_FAILURE) :
        newState = {
          ...state,
          events : {
            ...state.events,
            signUp : 'failure',
          }
        }
        return (state)

      case (actions.SIGN_IN) :
        return (state)

      case (actions.SIGN_IN_TRY) :
        newState = {
          ...state,
          events : {
            ...state.events,
            signIn : 'try',
          },
        }
        return (state)

      case (actions.SIGN_IN_SUCCESS) :
        newState = {
          ...state,
          events : {
            ...state.events,
            signIn : 'success',
          },
        }
        return (state)

      case (actions.SIGN_IN_FAILURE) :
        newState = {
          ...state,
          events : {
            ...state.events,
            signIn : 'failure',
          },
        }
        return (state)

      case (actions.SIGN_OUT) :
        return (state)

      case (actions.SIGN_OUT_TRY) :
        newState = {
          ...state,
          events : {
            ...state.events,
            SignOut : 'try',
          },
        }
        return (state)

      case (actions.SIGN_OUT_SUCCESS) :
        newState = {
          ...state,
          events : {
            ...state.events,
            SignOut : 'success',
          },
        }
        return (state)

      case (actions.SIGN_OUT_FAILURE) :
        newState = {
          ...state,
          events : {
            ...state.events,
            SignOut : 'failure',
          },
        }
        return (state)

      /// SERVER / ALL USERS -- stretch ///

      case (actions.GET_USERS) :
        return (state)

      case (actions.GET_USERS_TRY) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getUsers : 'try',
          },
        }
        return (state)

      case (actions.GET_USERS_SUCCESS) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getUsers : 'success',
          },
        }
        return (state)

      case (actions.GET_USERS_FAILURE) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getUsers : 'failure',
          },
        }
        return (state)

      /// SERVER / ALL GRAPHS -- stretch ///

      case (actions.GET_GRAPHS) :
        return (state)

      case (actions.GET_GRAPHS_TRY) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getGraphs : 'try',
          },
        }
        return (state)

      case (actions.GET_GRAPHS_SUCCESS) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getGraphs : 'success',
          },
        }
        return (state)

      case (actions.GET_GRAPHS_FAILURE) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getGraphs : 'failure',
          },
        }
        return (state)

      /// SERVER / USER ///

      case (actions.GET_USER) :
        return (state)

      case (actions.GET_USER_TRY) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getUser : 'try',
          },
        }
        return (state)

      case (actions.GET_USER_SUCCESS) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getUser : 'success',
          },
        }
        return (state)

      case (actions.GET_USER_FAILURE) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getUser : 'failure',
          },
        }
        return (state)

      /// SERVER / USER GRAPHS ///

      case (actions.GET_USER_GRAPHS) :
        return (state)

      case (actions.GET_USER_GRAPHS_TRY) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getUserGraphs : 'try',
          },
        }
        return (state)

      case (actions.GET_USER_GRAPHS_SUCCESS) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getUserGraphs : 'success',
          },
        }
        return (state)

      case (actions.GET_USER_GRAPHS_FAILURE) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getUserGraphs : 'failure',
          },
        }
        return (state)

      /// SERVER / GRAPH ///

      case (actions.POST_GRAPH) :
        return (state)

      case (actions.POST_GRAPH_TRY) :
        newState = {
          ...state,
          events : {
            ...state.events,
            postGraph : 'try',
          },
        }
        return (state)

      case (actions.POST_GRAPH_SUCCESS) :
        newState = {
          ...state,
          events : {
            ...state.events,
            postGraph : 'success',
          },
        }
        return (state)

      case (actions.POST_GRAPH_FAILURE) :
        newState = {
          ...state,
          events : {
            ...state.events,
            postGraph : 'failure',
          },
        }
        return (state)

      case (actions.GET_GRAPH) :
        return (state)

      case (actions.GET_GRAPH_TRY) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getGraph : 'try',
          },
        }
        return (state)

      case (actions.GET_GRAPH_SUCCESS) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getGraph : 'success',
          },
        }
        return (state)

      case (actions.GET_GRAPH_FAILURE) :
        newState = {
          ...state,
          events : {
            ...state.events,
            getGraph : 'failure',
          },
        }
        return (state)

      case (actions.PUT_GRAPH) :
        return (state)

      case (actions.PUT_GRAPH_TRY) :
        newState = {
          ...state,
          events : {
            ...state.events,
            putGraph : 'try',
          },
        }
        return (state)

      case (actions.PUT_GRAPH_SUCCESS) :
        newState = {
          ...state,
          events : {
            ...state.events,
            putGraph : 'success',
          },
        }
        return (state)

      case (actions.PUT_GRAPH_FAILURE) :
        newState = {
          ...state,
          events : {
            ...state.events,
            putGraph : 'failure',
          },
        }
        return (state)

      case (actions.DELETE_GRAPH) :
        // payload : graph index to delete
        newState = {
          ...state,
          currentSpider : (state.currentSpider === 0) ? 0 : state.currentSpider - 1,
          openedSpiders : state.openedSpiders.filter((spider, index) => (
            index !== payload
          )),
        }
        if (newState.openedSpiders.length === 0) {
          newState.openedSpiders = [initSpider (),]
        }
        return (newState)

      case (actions.DELETE_GRAPH_TRY) :
        newState = {
          ...state,
          events : {
            ...state.events,
            deleteGraph : 'try',
          },
        }
        return (state)

      case (actions.DELETE_GRAPH_SUCCESS) :
        newState = {
          ...state,
          events : {
            ...state.events,
            deleteGraph : 'success',
          },
        }
        return (state)

      case (actions.DELETE_GRAPH_FAILURE) :
        newState = {
          ...state,
          events : {
            ...state.events,
            deleteGraph : 'failure',
          },
        }
        return (state)

      // else
      default :
        hi.flag ('warn', 'action not defined')
        console.log (action)
        return (state)
    }
  }
  catch (error) {
    hi.flag ('error', 'something bad happened')
    console.error (error)
  }
}

/**************************************/

export default reducer
