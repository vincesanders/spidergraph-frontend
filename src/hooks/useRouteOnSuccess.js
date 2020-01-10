import { useEffect } from 'react'

/***************************************
  MAIN
***************************************/

const useRouteOnSuccess = (name, routeTo, status, ...moreDeps) => {
  useEffect (() => {
    console.log (`--- ${name} : ${status} ---`)
    if (status === 'success') {
      routeTo ()
    }
  }, [status, ...moreDeps])
}

/**************************************/

export default useRouteOnSuccess
