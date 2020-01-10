/// tools ///
import _ from 'lodash'
import { hasIn, getIn, setIn, updateIn } from 'immutable'
import hi from 'tools/hi'

/// internal modules ///
import initialState, {
  initCurrentUser,
  initSpider,
  initSavedSpider,
  initLabel,
  initValue,
  initDataset,
} from './initialState'
import actions from './actions'
import { user } from 'tools/auth'
import {serverToFront} from './converter';
import {getIndexOfSpiderWithServerId} from './utils';

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

/***************************************
  MAIN
----------------------------------------
  - reducer : state reducer
***************************************/

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  let newState = {}
  let newLabels = [];
  let newDatasets = [];
  let newData = [];

  let openSpiderIndex = -1;
  let savedSpiderIndex = -1
  let serverGraphId = -1;
  /// do it! ///
  try {
    /// actions ///
    switch (type) {

      /// CLIENT ///

      /// CLIENT / TABS ///

      case (actions.ADD_GRAPH) :
        // payload : void
        return (seqUpdateIn (state,
          ['currentSpider'],
          () => state.openedSpiders.length,
          ['currentSavedSpider'],
          () => state.savedSpiders.length,
          ['openedSpiders'],
          (list) => [...list, initSpider ()],
          ['savedSpiders'],
          (list) => [...list, initSavedSpider ()],
        ))

      case (actions.OPEN_GRAPH) :
        // payload : index of openedopenedSpiders
        openSpiderIndex = getIndexOfSpiderWithServerId(state.openedSpiders, payload);
        savedSpiderIndex = getIndexOfSpiderWithServerId(state.savedSpiders, payload);
        console.log('openup open id: ', openSpiderIndex);
        console.log('openup save id: ', savedSpiderIndex);


        if (openSpiderIndex !== -1){
          return (seqSetIn (state,
            ['currentSpider'],
            openSpiderIndex,
            ['currentSavedSpider'],
            savedSpiderIndex
          ))
        } else{
          return (seqSetIn (state,
            ['currentSavedSpider'],
            savedSpiderIndex
          ))
        }
        

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
        return (seqSetIn (state,
          ['openedSpiders', state.currentSpider, 'title'],
          payload,
        ))

      case (actions.EDIT_GRAPH_NOTES) :
        // payload : edited notes
        return (seqSetIn (state,
          ['openedSpiders', state.currentSpider, 'notes'],
          payload,
        ))

      case (actions.EDIT_GRAPH_THEME) :
        // payload : edited theme
        console.log('SET THEME TO ID: ', payload)
        return (seqSetIn (state,
          ['openedSpiders', state.currentSpider, 'theme'],
          payload,
        ))

      case (actions.EDIT_GRAPH_SCALE) :
        // payload : edited scale
        return (seqSetIn (state,
          ['openedSpiders', state.currentSpider, 'scale'],
          payload,
        ))

      case (actions.ADD_GRAPH_ARM) :
        // payload : none
        newState = {
          ...state,
          openedSpiders : Array.from (Object.values ({
            ...state.openedSpiders,
            [state.currentSpider] : {
              ...state.openedSpiders[state.currentSpider],
              labels: [...state.openedSpiders[state.currentSpider].labels, initLabel()],
              datasets: state.openedSpiders[state.currentSpider].datasets.map((dataset) => ({
                ...dataset,
                data: [...dataset.data, initValue()],
              }))
            },
          })),
        }
        return (newState)

      case (actions.EDIT_GRAPH_ARM) :
        // payload: index of graph-arm to edit && new graph arm name
        newLabels = state.openedSpiders[state.currentSpider].labels;
        newLabels[payload.index] = payload.newName;

        newState = {
          ...state,
          openedSpiders : Array.from (Object.values ({
            ...state.openedSpiders,
            [state.currentSpider] : {
              ...state.openedSpiders[state.currentSpider],
              labels: newLabels
            },
          })),
        }

        return (newState)

      case (actions.DELETE_GRAPH_ARM) :
        // payload : index of label/graph-arm to delete
        newLabels = state.openedSpiders[state.currentSpider].labels;
        newLabels.splice(payload, 1);
        newState = {
          ...state,
          openedSpiders : Array.from (Object.values ({
            ...state.openedSpiders,
            [state.currentSpider] : {
              ...state.openedSpiders[state.currentSpider],
              labels: newLabels,
              datasets: state.openedSpiders[state.currentSpider].datasets.map((dataset) => {
                const newDataset = dataset.data;
                newDataset.splice(payload, 1);
                console.log('spliced dataset')
                return {
                ...dataset,
                data: newDataset,
              }})
            },
          })),
        }

        return (newState)

      case (actions.ADD_GRAPH_DATASET) :
        // payload : none
        newState = {
          ...state,
          openedSpiders : Array.from (Object.values ({
            ...state.openedSpiders,
            [state.currentSpider] : {
              ...state.openedSpiders[state.currentSpider],
              datasets: [...state.openedSpiders[state.currentSpider].datasets, initDataset(state.openedSpiders[state.currentSpider].labels.length, 3)],
            },
          })),
        }
        return (newState)

      case (actions.EDIT_GRAPH_DATASET) :
        // payload: index of graph-arm to edit && new graph arm name
        newDatasets = state.openedSpiders[state.currentSpider].datasets;
        newDatasets[payload.index] = {...newDatasets[payload.index], label: payload.newName};

        newState = {
          ...state,
          openedSpiders : Array.from (Object.values ({
            ...state.openedSpiders,
            [state.currentSpider] : {
              ...state.openedSpiders[state.currentSpider],
              datasets: newDatasets
            },
          })),
        }

        return (newState)

      case (actions.DELETE_GRAPH_DATASET) :
        // payload : index of label/graph-arm to delete
        newDatasets = state.openedSpiders[state.currentSpider].datasets;
        newDatasets.splice(payload, 1);
        newState = {
          ...state,
          openedSpiders : Array.from (Object.values ({
            ...state.openedSpiders,
            [state.currentSpider] : {
              ...state.openedSpiders[state.currentSpider],
              datasets: newDatasets,
            },
          })),
        }

        return (newState)

      case (actions.EDIT_GRAPH_DATAPOINT):
        // payload: index of graph-arm to edit, index of catagory to edit && new datapoint value
        newData = state.openedSpiders[state.currentSpider].datasets[payload.datasetIndex].data;
        newData[payload.categoryIndex] = payload.newValue;

        newDatasets = state.openedSpiders[state.currentSpider].datasets;
        newDatasets[payload.datasetIndex] = {...newDatasets[payload.datasetIndex], data: newData};

        newState = {
          ...state,
          openedSpiders : Array.from (Object.values ({
            ...state.openedSpiders,
            [state.currentSpider] : {
              ...state.openedSpiders[state.currentSpider],
              datasets: newDatasets,
            },
          })),
        }

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
        return (seqSetIn (state,
          ['events', 'signUp'],
          'try',
        ))

      case (actions.SIGN_UP_SUCCESS) :
        // handle user
        user.isAllowed.set ('y')
        user.token.set (payload.data.token)
        user.data.set (payload.data)

        return (seqSetIn (state,
          ['events', 'signUp'],
          'success',
          ['currentUser'],
          payload.data,
        ))

      case (actions.SIGN_UP_FAILURE) :
        // handle user
        user.clear ()

        return (seqSetIn (state,
          ['events', 'signUp'],
          'failure',
        ))

      case (actions.SIGN_IN) :
        return (state)

      case (actions.SIGN_IN_TRY) :
        return (seqSetIn (state,
          ['events', 'signIn'],
          'try',
        ))

      case (actions.SIGN_IN_SUCCESS) :
        // handle user
        user.isAllowed.set ('y')
        user.token.set (payload.data.token)
        user.data.set (payload.data)

        return (seqSetIn (state,
          ['events', 'signIn'],
          'success',
          ['currentUser'],
          payload.data,
        ))

      case (actions.SIGN_IN_FAILURE) :
        // handle user
        user.clear ()

        return (seqSetIn (state,
          ['events', 'signIn'],
          'failure',
        ))

      case (actions.SIGN_OUT) :
        return (state)

      case (actions.SIGN_OUT_TRY) :
        return (seqSetIn (state,
          ['events', 'signOut'],
          'try',
        ))

      case (actions.SIGN_OUT_SUCCESS) :
        // handle user
        user.clear ()

        return (seqSetIn (state,
          ['events', 'signOut'],
          'success',
          ['currentUser'],
          initCurrentUser (),
        ))

      case (actions.SIGN_OUT_FAILURE) :
        return (seqSetIn (state,
          ['events', 'signOut'],
          'failure',
        ))

      /// SERVER / ALL USERS -- stretch ///

      case (actions.GET_USERS) :
        return (state)

      case (actions.GET_USERS_TRY) :
        return (seqSetIn (state,
          ['events', 'getUsers'],
          'try',
        ))

      case (actions.GET_USERS_SUCCESS) :
        return (seqSetIn (state,
          ['events', 'getUsers'],
          'success',
        ))

      case (actions.GET_USERS_FAILURE) :
        return (seqSetIn (state,
          ['events', 'getUsers'],
          'failure',
        ))

      /// SERVER / ALL GRAPHS -- stretch ///

      case (actions.GET_GRAPHS) :

        return (state)

      case (actions.GET_GRAPHS_TRY) :
        return (seqSetIn (state,
          ['events', 'getGraphs'],
          'try',
        ))

      case (actions.GET_GRAPHS_SUCCESS) :
        return (seqSetIn (state,
          ['events', 'getGraphs'],
          'success',
        ))

      case (actions.GET_GRAPHS_FAILURE) :
        return (seqSetIn (state,
          ['events', 'getGraphs'],
          'failure',
        ))

      /// SERVER / USER ///

      case (actions.GET_USER) :
        return (state)

      case (actions.GET_USER_TRY) :
        return (seqSetIn (state,
          ['events', 'getUser'],
          'try',
        ))

      case (actions.GET_USER_SUCCESS) :
        return (seqSetIn (state,
          ['currentUser'],
          payload,
          ['events', 'getUser'],
          'success',
        ))

      case (actions.GET_USER_FAILURE) :
        return (seqSetIn (state,
          ['events', 'getUser'],
          'failure',
        ))

      /// SERVER / USER GRAPHS ///

      case (actions.GET_USER_GRAPHS) :
        return (state)

      case (actions.GET_USER_GRAPHS_TRY) :
        return (seqSetIn (state,
          ['events', 'getUserGraphs'],
          'try',
        ))

      case (actions.GET_USER_GRAPHS_SUCCESS) :
        console.log('user graphs get success payload data: ');
        console.log(payload.data);

        const frontFormatSavedSpiders = payload.data.map(savedSpider => {
          return{
            id: savedSpider.id,
            title: savedSpider.name,
          }
        })

        return (seqSetIn (state,
          ['savedSpiders'],
          frontFormatSavedSpiders,
          ['events', 'getUserGraphs'],
          'success',
        ))

      case (actions.GET_USER_GRAPHS_FAILURE) :
        return (seqSetIn (state,
          ['events', 'getUserGraphs'],
          'failure',
        ))

      /// SERVER / GRAPH ///

      case (actions.POST_GRAPH) :
        return (state)

      case (actions.POST_GRAPH_TRY) :
        return (seqSetIn (state,
          ['events', 'postGraph'],
          'try',
        ))

      case (actions.POST_GRAPH_SUCCESS) :
        console.log('graph post success payload data: ');
        console.log(payload.data);

        return (seqSetIn (state,
          // needs ID
          ['openedSpiders', state.currentSpider, 'id'],
          payload.data.id,
          ['events', 'postGraph'],
          'success',
        ))

      case (actions.POST_GRAPH_FAILURE) :
        return (seqSetIn (state,
          ['events', 'postGraph'],
          'failure',
        ))

      case (actions.GET_GRAPH) :
        return (state)

      case (actions.GET_GRAPH_TRY) :
        return (seqSetIn (state,
          ['events', 'getGraph'],
          'try',
        ))

      case (actions.GET_GRAPH_SUCCESS) :
        // console.log('graph get success payload data: ');
        // console.log(payload.data);

        // convert graph from server to frontend format, and add to openedSpiders array at end
        // console.log('server to front conversion:');
        const graphFrontendFormat = serverToFront(payload.data);
        // console.log(graphFrontendFormat);

        return (seqUpdateIn (state,
          ['currentSpider'],
          () => state.openedSpiders.length,
          ['openedSpiders'],
          (list) => [...list, graphFrontendFormat],
        ))

        // return (seqSetIn (state,
        //   // needs graph, and convert
        //   ['events', 'getGraph'],
        //   'success',
        // ))

      case (actions.GET_GRAPH_FAILURE) :
        return (seqSetIn (state,
          ['events', 'getGraph'],
          'failure',
        ))

      case (actions.PUT_GRAPH) :
        return (state)

      case (actions.PUT_GRAPH_TRY) :
        return (seqSetIn (state,
          ['events', 'putGraph'],
          'try',
        ))

      case (actions.PUT_GRAPH_SUCCESS) :
        return (seqSetIn (state,
          ['events', 'putGraph'],
          'success',
        ))

      case (actions.PUT_GRAPH_FAILURE) :
        return (seqSetIn (state,
          ['events', 'putGraph'],
          'failure',
        ))

      case (actions.DELETE_GRAPH) :
        serverGraphId = payload;
        console.log('delete server id: ', serverGraphId);
        
        savedSpiderIndex = getIndexOfSpiderWithServerId(state.savedSpiders, serverGraphId);
        console.log('delete saved id: ', savedSpiderIndex);

        openSpiderIndex = getIndexOfSpiderWithServerId(state.openedSpiders, serverGraphId);
        console.log('delete open id: ', openSpiderIndex);

        return (seqUpdateIn (state,
          // ['currentSpider'],
          // (index) => ((index === 0) ? 0 : index - 1),
          ['openedSpiders'],
          (list) => (list.filter ((spider, i) => (i !== openSpiderIndex))),
          ['savedSpiders'],
          (list) => (list.filter ((spider, i) => (i !== savedSpiderIndex))),
          ['openedSpiders'],
          (list) => ((list.length === 0) ? [initSpider ()] : list)
        ))

      case (actions.DELETE_GRAPH_TRY) :
        return (seqSetIn (state,
          ['events', 'deleteGraph'],
          'try',
        ))

      case (actions.DELETE_GRAPH_SUCCESS) :
          console.log('SERVER DELETE SUCCESS');
          console.log(payload.data);

        // return (seqUpdateIn (state,
        //   ['currentSpider'],
        //   (index) => ((index === 0) ? 0 : index - 1),
        //   ['openedSpiders'],
        //   (list) => (list.filter ((spider, i) => (i !== payload))),
        //   ['openedSpiders'],
        //   (list) => ((list.length === 0) ? [initSpider ()] : list),
        //   ['events', 'deleteGraph'],
        //   () => 'success',
        // ))
        // ^^ phil comment out
        // return (seqSetIn (state,
        //   ['events', 'deleteGraph'],
        //   'success',
        // ))
          return (state)

      case (actions.DELETE_GRAPH_FAILURE) :
        return (seqSetIn (state,
          ['events', 'deleteGraph'],
          'failure',
        ))

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
