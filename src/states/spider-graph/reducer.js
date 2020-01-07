/// tools ///
import hi from 'tools/hi'
// import iffy from 'tools/iffy'
// import immutably from 'tools/immutably'
// import nullably from 'tools/nullably'

/// internal modules ///
import {
  initialState,
  initialSpider,
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
          currentSpider : state.spiders.length + 1,
          spiders : [
            ...state.spiders,
            initialSpider (),
          ],
        }
        return (newState)

      case (actions.OPEN_GRAPH) :
        // payload : new currentSpider
        newState = {
          ...state,
          currentSpider : payload,
        }
        return (newState)

      case (actions.EDIT_GRAPH) :
        // payload : edited spider
        return (newState)

      case (actions.RESET_GRAPH) :
        // payload : void
        return (newState)

      case (actions.EDIT_GRAPH_TITLE) :
        // payload : edited title
        newState = {
          ...state,
          spiders : Array.from (Object.values ({
            ...state.spiders,
            [state.currentSpider] : {
              ...state.spiders[state.currentSpider],
              title : payload,
            },
          })),
        }
        return (newState)

      case (actions.EDIT_GRAPH_NOTES) :
        // payload : edited notes
        newState = {
          ...state,
          spiders : Array.from (Object.values ({
            ...state.spiders,
            [state.currentSpider] : {
              ...state.spiders[state.currentSpider],
              notes : payload,
            },
          })),
        }
        return (newState)

      case (actions.EDIT_GRAPH_THEME) :
        // payload : edited theme
        newState = {
          ...state,
          spiders : Array.from (Object.values ({
            ...state.spiders,
            [state.currentSpider] : {
              ...state.spiders[state.currentSpider],
              theme : payload,
            },
          })),
        }
        return (newState)

      case (actions.EDIT_GRAPH_SCALE) :
        // payload : edited scale
        newState = {
          ...state,
          spiders : Array.from (Object.values ({
            ...state.spiders,
            [state.currentSpider] : {
              ...state.spiders[state.currentSpider],
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
