/***************************************
  MAIN
----------------------------------------
  - initialState
  #### user ####
  - initCurrentUser
  #### edits ####
  - initCurrentSpider
  #### spider/spiders ####
  - initTitle
  - initNotes
  - initTheme
  - initScale
  - initLabel
  - initValue
  - initDataset
  - initSpider
  - initSpiders
  #### events ####
  - initEventStatus
  - initEvents
***************************************/

/*******************
  user
*******************/

export const initCurrentUser = () => ({})

/*******************
  edits
*******************/

export const initCurrentSpider = () => 0

/*******************
  spider/spiders
*******************/

export const initId = () => ':id'

export const initTitle = () => 'new graph x'

export const initNotes = () => ''

export const initTheme = () => 1

export const initScale = () => 10

export const initLabel = (index = 1) => `new label (${index})`

export const initValue = () => 3

export const initDataset = (length, value = 1) => ({
  label : 'new dataset',
  data : Array (length).fill (value),
})

export const initSpider = () => ({
  id : initId (),
  title : initTitle (),
  labels : [ 'label-1', 'label-2', 'label-3'],
  datasets : [
    {
      label : 'dataset-1',
      data : [ 1, 2, 3],
    },
    {
      label : 'dataset-2',
      data : [ 4, 3, 2],
    },
    {
      label : 'dataset-3',
      data : [ 10, 9, 8],
    },
    {
      label : 'dataset-4',
      data : [ 6, 7, 8],
    },
  ],
  notes : initNotes (),
  theme : initTheme (),
  scale : initScale (),
})

export const initSavedSpider = () => ({
  id : initId (),
  title : initTitle (),
})

/*******************
  events
*******************/

export const initEventStatus = () => null

export const initEvents = () => ({
  /// auth ///
  signUp  : initEventStatus (),
  signIn  : initEventStatus (),
  signOut : initEventStatus (),
  /// all users -- stretch ///
  getUsers : initEventStatus (),
  /// all graphs -- stretch ///
  getGraphs : initEventStatus (),
  /// user ///
  getUser : initEventStatus (),
  /// user graphs ///
  getUserGraphs : initEventStatus (),
  /// graph ///
  postGraph   : initEventStatus (),
  getGraph    : initEventStatus (),
  putGraph    : initEventStatus (),
  deleteGraph : initEventStatus (),
})

/**************************************/

export const initialState = {
  currentUser : initCurrentUser (),
  savedSpiders : [],
  openedSpiders : [
    // initSpider (),
  ],
  currentSpider : initCurrentSpider (),
  currentSavedSpider: 0,
  events : initEvents (),
}

/**************************************/

export default initialState
