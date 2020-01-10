/// external modules ///
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import _ from 'lodash'
import styled from 'styled-components'
import {authios} from 'tools/auth'

import { SignUpForm } from 'components/AuthForms'
import { signUp } from 'states/spider-graph/thunks'
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
    margin: 30% 9px;
  }

  position: absolute;
  width: 684px;
  height: 51px;
  margin: 15% 9px;

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
  position: absolute;
  left: 20%;
  top: 20%

  border: none;
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
  bottom: 20%;
  border: none;
  background-color: #FFFFFF;
  width: 300px;
  margin: 5px;
  margin-left: 20px;
`

const RedirectButton = styled.button`
  width: 100px;
  background-color: #FFFFFF;
  border: none

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 38px;
  /* or 271% */

  text-align: center;

  color: #4054B2;
`

/***************************************
  MAIN
***************************************/

const SignUp = (props) => {
  const events = useSelector ((state) => state.events)
  const dispatch = useDispatch ()

  const routeToHome = () => {
    props.history.push (client.ends.home ())
  }

  const routeToSignIn = () => {
    props.history.push (client.ends.signin ())
  }

  const trySubmit = (values, formikBag) => {
    console.log ('--- sign up : trySubmit ---')
    dispatch (signUp (_.omit (values, ['retypedPassword'])))
  }

  useRouteOnSuccess ('sign up', routeToHome, [events.signUp])

  return (
    <PageContainer className='SignUp'>
      <PageTitle>Sign Up For An Account</PageTitle>
      <FormContainer>
        <Logo
        onClick={routeToSignIn}>
          Spider.Graph
        </Logo>
        <SignUpForm
        trySubmit={trySubmit}
        />
        <RedirectContainer>
          Already have an account?
          <RedirectButton
          onClick={routeToSignIn}>
            Sign In
          </RedirectButton>
        </RedirectContainer>
      </FormContainer>
    </PageContainer>
  )
}

/**************************************/

export default SignUp
