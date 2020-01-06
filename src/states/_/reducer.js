/// tools ///
import hi from 'tools/hi';
// import iffy from 'tools/iffy';
// import immutably from 'tools/immutably';
// import nullably from 'tools/nullably';

/// internal modules ///
import initState from './init'
import { types } from './actions';

/***************************************
  MAIN
----------------------------------------
  - reducer : state reducer
***************************************/

const reducer = (state = initState, action) => {
  const { type, data } = action;

  /// do it! ///
  try {
    /// actions ///
    switch (action.type) {
      case types.DO_SOMETHING :
        hi.flag ('log', 'doing something');
        return (state);
      // else
      default :
        hi.flag ('warn', 'action not defined');
        console.log (action);
        return (state);
    };
  }
  catch (error) {
    hi.flag ('error', 'something bad happened');
    console.error (error);
  }
};

/**************************************/

export default reducer;
