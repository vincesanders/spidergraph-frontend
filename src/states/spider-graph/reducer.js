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
