import { useEffect } from 'react'

/***************************************
  MAIN
***************************************/

const useRouteOnSuccess = (name, routeTo, status, ...moreDeps) => {
  useEffect (() => {
    console.log (`--- ${name} : ${status} ---`)
    switch (status) {
      case ('success') :
        routeTo ()
        break
      case ('failure') :
        break
      default :
        break
    }
  }, [status, ...moreDeps])
}

/**************************************/

export default useRouteOnSuccess
