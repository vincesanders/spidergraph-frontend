import * as redux from 'redux';
import reducer from './reducer';

const create = (...args) => (redux.createStore (reducer, ...args));

export default {
  create,
};
