/// external modules ///
import React from 'react'

import LoginForm from './LoginForm';
import { client } from '../routes'

/***************************************
  MAIN
***************************************/
const SignIn = (props) => {
  const routeToSignUp = () => {
    props.history.push(client.ends.signup ());
  }

  return (
    <div className='SignIn'>
      SignIn
      <LoginForm />
      <p>Don't have an account?</p>
      <button onClick={routeToSignUp}>Create One</button>
    </div>
  )
}

/**************************************/

export default SignIn
