import {
  initCurrentSpider,
  initEvents,
} from './initialState'

/***************************************
  MAIN
----------------------------------------
  - exampleState : example state
***************************************/

const exampleState = {
  savedSpiders : [],
  openedSpiders : [
    {
      id : 'example',
      title : 'Example Graph',
      labels : [ 'Cat1', 'Cat2', 'Cat3', 'Cat4', 'Cat5' ],
      datasets : [
        {
          label : 'Example Dataset',
          backgroundColor : 'rgba(255, 82, 82, 0.5)',
          borderColor : 'rgba(255, 82, 82, 0.5)',
          borderWidth : '2',
          data : [ 10, 11, 12, 13, 14 ],
          legend : { position : 'bottom' },
        }
      ],
      notes : 'These are some notes!',
      theme : 1,
      scale : 20,
    },
  ],
  currentSpider : initCurrentSpider (),
  events : initEvents (),
}

/**************************************/

export default exampleState
