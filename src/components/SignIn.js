/// external modules ///
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { authios } from 'tools/auth'

import { SignInForm } from 'components/AuthForms'
import { signIn } from 'states/spider-graph/thunks'
import { client } from 'routes'
import { useRouteOnSuccess } from 'hooks'

/***************************************
  COMPONENTS
***************************************/

const PageContainer = styled.div`
  background: #FFFFFF;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin: 5px;
`

const PageTitle = styled.h3`
  @media (max-width: 768px) {
    margin: 40% 9px;
  }

  position: absolute;
  width: 684px;
  height: 51px;
  margin: 20% 9px;

  /* PageTitle Text */

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 167%;

  text-align: center;

  color: #4054B2;
`

const FormContainer = styled.div`
  width: 100%;
  margin: 10px 20px;
  display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
`

const Logo = styled.button`
  @media (max-width: 768px) {
  }

  position: absolute;
  left: 20%;
  top: 20%;

  border:none;
  background-color: #FFFFFF;
  color:#4054B2;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 38px;
`

const RedirectContainer = styled.div`
  position: absolute;
  bottom: 30%;
  border: none;
  background-color: #FFFFFF;
  width: 300px;
  margin: 5px;

  color: #0D1124;

  @media (max-width: 768px) {
    bottom: 20%;
    right: 25%;
  }
`

const RedirectButton = styled.button`
  width: 100px;
  background-color: #FFFFFF;
  border: none;
  margin-left: 10%;

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 38px;
  /* or 271% */

  text-align: center;

  color: #4054B2 ;
`

/***************************************
  MAIN
***************************************/

const SignIn = (props) => {
  const events = useSelector ((state) => state.events)
  const dispatch = useDispatch ()

  const routeToHome = () => {
    props.history.push (client.ends.home ())
  }

  const routeToSignUp = () => {
    props.history.push (client.ends.signup ())
  }

  const trySubmit = (values, formikBag) => {
    console.log ('--- sign in : trySubmit ---')
    dispatch (signIn (values))
  }

  useRouteOnSuccess ('sign in', routeToHome, [events.signIn])

  return (
    <PageContainer className='SignIn'>
      <PageTitle>Sign In</PageTitle>
      <FormContainer>
        <Logo
        onClick={routeToSignUp}>
          Spider.Graph
        </Logo>
        <SignInForm
        trySubmit={trySubmit}
        />
        <RedirectContainer>
          Need an account?
          <RedirectButton
          onClick={routeToSignUp}>
            Sign Up
          </RedirectButton>
        </RedirectContainer>
      </FormContainer>
    </PageContainer>
  )
}

/**************************************/

export default SignIn
