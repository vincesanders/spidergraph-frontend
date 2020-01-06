/***************************************
  MAIN
----------------------------------------
  - types  : list of action types
  - make   : fun to make (create) an action obj
  - makers : obj of action maker (creator) funs
***************************************/

export const types = {
  DO_SOMETHING : 'DO_SOMETHING',
};

const make = (type, data) => ({ type, data });

export const makers = Object.fromEntries (
  Object.keys (types).map ((name) => [
    name, (...args) => make (name, ...args)
  ])
);

/**************************************/

export default {
  types,
  makers,
};
