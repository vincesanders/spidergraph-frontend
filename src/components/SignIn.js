/// external modules ///
import React from 'react'

import SignInForm from 'components/AuthForms/SignInForm'
import { client } from 'routes'

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
      <SignInForm />
      <p>Don't have an account?</p>
      <button onClick={routeToSignUp}>Create One</button>
    </div>
  )
}

/**************************************/

export default SignIn
