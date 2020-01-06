/*******************************************************************************
  iffy
--------------------------------------------------------------------------------
  A set of helper functions for very basic existence/type/form checks.
*******************************************************************************/

/***************************************
  MAIN
***************************************/

/// existence ///
export const is    = (x) => (x !== undefined && x !== null);
export const isnt  = (x) => (!is (x)); /* (x === undefined || x === null); */
export const maybe = (x) => (is (x) || isnt (x));

/// boolean ///
export const yes     = (x) => (x === true);
export const no      = (x) => (x === false);
export const boolean = (x) => (yes (x) || no (x));

/// types ///
/*--------------------------------------
  isa
  Check if input is of type _t_.
--------------------------------------*/
export const like = (t, x) => (
  is (x) && (toString.call (x) === '[object ' + t + ']')
);
export const unlike = (t, x) => (!like (t, x));

// export const type = {
//   // simple
//   'object'   : (x) => (isa ('Object', x)),
//   'array'    : (x) => (isa ('Array', x)),
//   'boolean'  : (x) => (typeof x === 'boolean'),
//   'number'   : (x) => (typeof x === 'number'),
//   'string'   : (x) => (typeof x === 'string'),
//   'function' : (x) => (typeof x === 'function'),
//   // complex
//   'Object'   : (x) => (x instanceof Object),
//   'Array'    : (x) => (x instanceof Array),
//   'Boolean'  : (x) => (x instanceof Boolean),
//   'Number'   : (x) => (x instanceof Number),
//   'String'   : (x) => (x instanceof String),
//   'Function' : (x) => (x instanceof Function),
// }

/**************************************/

export default {
  is, isnt, maybe,
  yes, no, boolean,
  like, unlike
};
