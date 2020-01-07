/// tools ///
import hi from 'tools/hi'
// import iffy from 'tools/iffy'
// import immutably from 'tools/immutably'
// import nullably from 'tools/nullably'

/// internal modules ///
import initialState from './initialState'
import actions from './actions'

/***************************************
  MAIN
----------------------------------------
  - reducer : state reducer
***************************************/

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  /// do it! ///
  try {
    /// actions ///
    switch (action.type) {
      /// client ///
      case (actions.ADD_GRAPH) :
        return (state)
      case (actions.EDIT_GRAPH) :
        return (state)
      case (actions.RESET_GRAPH) :
        return (state)
      case (actions.EDIT_GRAPH_TITLE) :
        return (state)
      case (actions.EDIT_GRAPH_THEME) :
        return (state)
      case (actions.EDIT_GRAPH_SCALE) :
        return (state)
      case (actions.ADD_GRAPH_ARM) :
        return (state)
      case (actions.EDIT_GRAPH_ARM) :
        return (state)
      case (actions.DELETE_GRAPH_ARM) :
        return (state)
      case (actions.ADD_GRAPH_DATASET) :
        return (state)
      case (actions.EDIT_GRAPH_DATASET) :
        return (state)
      case (actions.DELETE_GRAPH_DATASET) :
        return (state)
      case (actions.REORDER_GRAPH_ARMS) :
        return (state)
      case (actions.REORDER_GRAPH_DATASETS) :
        return (state)
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
