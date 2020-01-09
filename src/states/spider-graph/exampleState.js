import {
  initCurrentUser,
  initCurrentSpider,
  initEvents,
} from './initialState'

/***************************************
  MAIN
----------------------------------------
  - exampleState : example state
***************************************/

const exampleState = {
  currentUser : initCurrentUser (),
  savedSpiders : [],
  openedSpiders : [
    {
      id : 'example-1',
      title : 'title-1',
      labels : [ 'label-1', 'label-2', 'label-3', 'label-4', 'label-5' ],
      datasets : [
        {
          label : 'dataset-1',
          data : [ 10, 11, 12, 13, 14 ],
        },
        {
          label : 'dataset-2',
          data : [ 11, 12, 13, 14, 15 ],
        }
      ],
      notes : 'notes-1',
      theme : 1,
      scale : 1,
    },
    {
      id : 'example-2',
      title : 'title-2',
      labels : [ 'label-1', 'label-2', 'label-3' ],
      datasets : [
        {
          label : 'dataset-1',
          data : [ 10, 11, 12 ],
        },
        {
          label : 'dataset-2',
          data : [ 11, 12, 13 ],
        },
        {
          label : 'dataset-3',
          data : [ 12, 13, 14 ],
        }
      ],
      notes : 'notes-2',
      theme : 0,
      scale : 2,
    },
  ],
  currentSpider : initCurrentSpider (),
  events : initEvents (),
}

/**************************************/

export default exampleState
