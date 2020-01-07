/// tools ///
import hi from 'tools/hi'
// import iffy from 'tools/iffy'
// import immutably from 'tools/immutably'
// import nullably from 'tools/nullably'

/// internal modules ///
import {
  initialState,
  initialSpiderGraph,
} from './initialState'
import actions from './actions'

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
    switch (action.type) {
      /// client ///
      case (actions.ADD_GRAPH) :
        // payload : void
        newState = {
          ...state,
          spiders : [
            ...state.spiders,
            initialSpiderGraph (),
          ],
        }
        return (newState)

      case (actions.OPEN_GRAPH) :
        // payload : new openedSpider
        newState = {
          ...state,
          openedSpider : action.payload,
        }
        return (newState)

      case (actions.EDIT_GRAPH) :
        // payload : edited spider
        return (newState)

      case (actions.RESET_GRAPH) :
        // payload : void
        return (newState)

      case (actions.EDIT_GRAPH_TITLE) :
        return (newState)

      case (actions.EDIT_GRAPH_THEME) :
        return (newState)

      case (actions.EDIT_GRAPH_SCALE) :
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

      /// server ///
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
