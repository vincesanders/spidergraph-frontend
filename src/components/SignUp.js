/// external modules ///
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'
import styled from 'styled-components'
import {authios} from 'tools/auth'

import SignUpForm from 'components/AuthForms/SignUpForm'
import { signUp } from 'states/spider-graph/thunks'
import { client } from 'routes'

const SignUpCont = styled.div`
  width: 100%;
  background: #FFFFFF;
  display:flex;
  flex-direction: column;
  align-items: center;
`

const H3 = styled.h3`
  @media (max-width: 768px) {
    margin: 40% 9px 0 9px;
  }

  margin-top: 10%;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  text-align: center;
  color: #4054B2;
`

const Formcont = styled.div`
  width: 100%;
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Logo = styled.button`

position: absolute;
left:20%;
top: 5%;

border:none;
background-color: #FFFFFF;
color:#4054B2;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 38px;`

const DivToSignIn = styled.div`
  border: none;
  background-color: #FFFFFF;
  width: 300px;
  text-align: center;
  color: #0D1124;
`

const Signin = styled.button`
  background-color: #FFFFFF;
  border: none;
  margin-left: 10%;

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 38px;

  text-align: center;
  color:#4054B2 ;
`



/***************************************
  MAIN
***************************************/
const SignUp = (props) => {
  const events = useSelector ((state) => state.events)
  const dispatch = useDispatch ()

  const routeToHome = () => {
    props.history.push(client.ends.home ())
  }

  const routeToSignIn = () => {
    props.history.push(client.ends.signin ())
  }

  const trySubmit = (values, formikBag) => {
    dispatch (signUp (_.omit (values, ['retypedPassword'])))
  }

  useEffect (() => {
    switch (events.signUp) {
      case ('success') :
          routeToHome ()
          break
      case ('failure') :
          console.log ('error on sign up')
          break
      default :
          console.log ('doing nothing')
          break
  }
  }, [events.signUp])

  return (
    <SignUpCont>
      <H3>Create an Account</H3>
      <Formcont>
      <SignUpForm
      trySubmit={trySubmit}
      />
      <a href="https://spidergraph.alexmiller26.now.sh/">
      <Logo>Spider.Graph</Logo>
      </a>
      <DivToSignIn>
        Already have an account?
        <Signin onClick={routeToSignIn}>Sign In</Signin>
      </DivToSignIn>
      </Formcont>

    </SignUpCont>

  )
}

/**************************************/

export default SignUp
