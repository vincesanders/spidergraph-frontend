/// external modules ///
import React from 'react'
import styled from 'styled-components'

import SignInForm from 'components/AuthForms/SignInForm'
import { client } from 'routes'


const SignInCont = styled.div`
  background: #FFFFFF;
  height: 100vh;
  display:flex;
  justify-content: center;
  margin: 5px;
`

const H3 = styled.h3`
position: absolute;
width: 684px;
height: 51px;
margin: 20% 9px;

/* H3 Text */

font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 167%;

text-align: center;

color: #4054B2;`

const Formcont = styled.div`
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
left:20%;
top: 20%

border:none;
background-color: #FFFFFF;
color:#4054B2;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 38px;`

/***************************************
  MAIN
***************************************/
const SignIn = (props) => {
  const routeToSignUp = () => {
    props.history.push(client.ends.signup ());
  }

  return (
    <SignInCont>
      <H3>
       Log In
      </H3>
      <Formcont>
      <SignInForm />
      <Logo onClick={routeToSignUp}>Spider.Graph</Logo>
      </Formcont>
    </SignInCont>
    
  )
}

/**************************************/

export default SignIn
