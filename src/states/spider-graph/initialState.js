/***************************************
  MAIN
----------------------------------------
  - initialState : initial state
***************************************/

export const initialTitle = () => 'new graph'

export const initialNotes = () => ''

export const initialTheme = () => 0

export const initialScale = () => 10

export const initialLabel = (index = 1) => `new label (${index})`

export const initialValue = () => 1

export const initialDataset = (length, value = 1) => ({
  label : 'new dataset',
  data : Array (length).fill (value),
})

export const initialSpider = () => ({
  title : initialTitle (),
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
  notes : initialNotes (),
  theme : initialTheme (),
  scale : initialScale (),
})

/**************************************/

export const initialState = {
  currentSpider : 0,
  spiders : [
    initialSpider (),
  ],
}

/**************************************/

export default initialState
