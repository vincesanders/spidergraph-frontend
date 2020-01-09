/// external modules ///
import React from 'react'
import styled from 'styled-components'
import {authios} from 'tools/auth'

import SignUpForm from 'components/AuthForms/SignUpForm'
import { client, server } from 'routes'

const SignUpCont = styled.div`
  background: #FFFFFF;
  height: 100vh;
  display:flex;
  justify-content: center;
  margin: 5px;
`

const H3 = styled.h3`

@media (max-width: 768px) {
  margin: 30% 9px;
}

position: absolute;
width: 684px;
height: 51px;
margin: 15% 9px;

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

const DivToSignIn = styled.div`
position: absolute;
bottom: 20%;
border: none;
background-color: #FFFFFF;
width: 300px;
margin: 5px;
margin-left: 20px;
`

const Signin = styled.button`
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

color:#4054B2 ;
`



/***************************************
  MAIN
***************************************/
const SignUp = (props) => {
  const routeToSignIn = () => {
    props.history.push(client.ends.signin ());
  }

  const test = () => {
    authios().post(server.ends.signup.POST(),{username:'hello',password:'hello', email:'p@rick.com'}).then(
      res => {
        console.log(res, 'heyo')
      }
    )
  }

  return (
    <SignUpCont>
      <H3>Create an Account</H3>
      <Formcont>
      <SignUpForm />
      <Logo onClick={test}>Spider.Graph</Logo>
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
