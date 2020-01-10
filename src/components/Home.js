/// external modules ///
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

/// internal modules ///
import Dashboard from './Dashboard';
import { getUserGraphs } from 'states/spider-graph/thunks'
import { user } from 'tools/auth'

/***************************************
  MAIN
***************************************/
const Home = (props) => {
  const currentUser = user.data.get ()
  const dispatch = useDispatch ()

  useEffect (() => {
    currentUser && dispatch (getUserGraphs (currentUser.id))
  }, [currentUser, dispatch])

  return (
    <div className='Home'>
      <Dashboard />
    </div>
  )
}

/**************************************/

export default Home
