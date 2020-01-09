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
@media (max-width: 768px) {
  margin: 40% 9px;
}


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

@media (max-width: 768px) {
  
}

position: absolute;
left:20%;
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

const DivToSignUp = styled.div`
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
/* or 271% */

text-align: center;

color:#4054B2 ;


`

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
      <a href="https://spidergraph.alexmiller26.now.sh/">
      <Logo>Spider.Graph</Logo>
      </a>
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
