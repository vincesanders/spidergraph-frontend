/// external modules ///
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { authios } from 'tools/auth'

import SignInForm from 'components/AuthForms/SignInForm'
import { signIn } from 'states/spider-graph/thunks'
import { client } from 'routes'


const SignInCont = styled.div`
  width: 100%;
  background: #FFFFFF;
  display:flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`

const H3 = styled.h3`
  @media (max-width: 768px) {
    margin: 40% 9px 0 9px;
  }

  margin-top: 15%;
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

border: none;
background-color: #FFFFFF;
color:#4054B2;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 38px;
`

const DivToSignUp = styled.div`
  border: none;
  background-color: #FFFFFF;
  width: 300px;
  text-align: center;
  color: #0D1124;
`

const SignUp = styled.button`
  width: 100px;
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
  /* overflow-x: hidden; */
`

/***************************************
  MAIN
***************************************/
const SignIn = (props) => {
  const events = useSelector ((state) => state.events)
  const dispatch = useDispatch ()

  const routeToHome = () => {
    props.history.push(client.ends.home ())
  }

  const routeToSignUp = () => {
    props.history.push(client.ends.signup ())
  }

  const trySubmit = (values, formikBag) => {
    dispatch (signIn (values))
  }

  useEffect (() => {
    switch (events.signIn) {
      case ('success') :
          routeToHome ()
          break
      case ('failure') :
          console.log ('error on sign in')
          break
      default :
          console.log ('doing nothing')
          break
  }
  }, [events.signIn])

  return (


    <SignInCont>
      <a href="https://vincesanders.github.io/spidergraph-marketing-page/index.html">
        <Logo>Spider.Graph</Logo>
      </a>
      <H3>
        Log In
      </H3>
      <Formcont>
      <SignInForm trySubmit={trySubmit} />
        <DivToSignUp>
          Need an account?
          <SignUp onClick={routeToSignUp}>Sign Up</SignUp>
        </DivToSignUp>
      </Formcont>
    </SignInCont>

  )
}

/**************************************/

export default SignIn
