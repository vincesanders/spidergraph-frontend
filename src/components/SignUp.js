/// external modules ///
import React from 'react'

import SignUpForm from 'components/AuthForms/SignUpForm'
import { client } from 'routes'

/***************************************
  MAIN
***************************************/
const SignUp = (props) => {
  const routeToSignIn = () => {
    props.history.push(client.ends.signin ());
  }

  return (
    <div className='SignUp'>
      SignUp
      <SignUpForm />
      <p>Already have an account?</p>
      <button onClick={routeToSignIn}>Login</button>
    </div>
  )
}

/**************************************/

export default SignUp
