/*******************************************************************************
  $tree
--------------------------------------------------------------------------------
  A meta-utility for declaration and inspection of module trees.
*******************************************************************************/

/// branch ///
export const branch = ($name, $trunk) => {
  const $pathname = ($trunk) ? ($trunk.$fullname + '/') : ('');
  const $fullname = $pathname + $name;

  return ({ $name, $pathname, $fullname });
};

/// root ///
export const root = ($name) => (branch ($name));

/**************************************/

export default {
  branch,
  root,
};
