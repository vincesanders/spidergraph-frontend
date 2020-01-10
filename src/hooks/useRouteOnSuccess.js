import { useEffect } from 'react'

/***************************************
  MAIN
***************************************/

const useRouteOnSuccess = (name, routeTo, deps) => {
  const status = deps[0]
  useEffect (() => {
    console.log (`--- ${name} : ${status} ---`)
    if (status === 'success') {
      routeTo ()
    }
  }, deps)
}

/**************************************/

export default useRouteOnSuccess
