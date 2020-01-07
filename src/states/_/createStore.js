import * as redux from 'redux'
import reducer from './reducer'

const createStore = (...args) => (redux.createStore (reducer, ...args))

export default {
  createStore,
}
