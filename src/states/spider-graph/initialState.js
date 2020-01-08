/***************************************
  MAIN
----------------------------------------
  - initialState
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
  edits
*******************/

export const initCurrentSpider = () => 0

/*******************
  spider/spiders
*******************/

export const initId = () => 'id'

export const initTitle = () => 'new graph'

export const initNotes = () => ''

export const initTheme = () => 0

export const initScale = () => 10

export const initLabel = (index = 1) => `new label (${index})`

export const initValue = () => 1

export const initDataset = (length, value = 1) => ({
  label : 'new dataset',
  data : Array (length).fill (value),
})

export const initSpider = () => ({
  id : initId (),
  title : initTitle (),
  labels : [ 'label-1', 'label-2', 'label-3', 'label-4', 'label-5' ],
  datasets : [
    {
      label : 'dataset-1',
      data : [ 1, 2, 3, 4, 5 ],
    },
    {
      label : 'dataset-2',
      data : [ 5, 4, 3, 2, 1 ],
    },
  ],
  notes : initNotes (),
  theme : initTheme (),
  scale : initScale (),
})

export const initSpiders = () => ([
  initSpider (),
])

/*******************
  events
*******************/

export const initEventStatus = () => null

export const initEvents = () => ({
  /// auth ///
  signUp  : initEventStatus (),
  signIn  : initEventStatus (),
  signOut : initEventStatus (),
  /// all users ///
  getUsers : initEventStatus (),
  /// user ///
  getUser : initEventStatus (),
  getUserGraphs : initEventStatus (),
  /// all graphs ///
  getGraphs : initEventStatus (),
  /// graph ///
  postGraph   : initEventStatus (),
  getGraph    : initEventStatus (),
  putGraph    : initEventStatus (),
  deleteGraph : initEventStatus (),
})

/**************************************/

export const initialState = {
  currentSpider : initCurrentSpider (),
  spiders : initSpiders (),
  events : initEvents (),
}

/**************************************/

export default initialState
