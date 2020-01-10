/// external modules ///
import React from 'react'
import styled from 'styled-components'

/***************************************
  COMPONENTS
***************************************/

const FormContainer = styled.div`
  width: 70%;
  height: 10%
  margin: 10px 20px;
  display: flex;
  justify-content: center;
`

const Form = styled.form``

const LabelDiv = styled.div`
  width: 100%;
  margin: 10px;
`

const SubmitButton = styled.button`
  width: 60%;
  background: #4054B2;
  border-radius: 5px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 38px;
  /* or 271% */

  text-align: center;

  color: #FFFFFF;
`

/***************************************
  MAIN
***************************************/

const SignOutForm = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault ()
    console.log ('--- sign out : handleSubmit ---')
    props.trySubmit ()
  }

  return (
    <FormContainer className='SignOutForm'>
      <Form
      className='sign-x-form'
      onSubmit={handleSubmit}>
        <SubmitButton type='submit'>Sign Out</SubmitButton>
      </Form>
    </FormContainer>
  )
}

/**************************************/

export default SignOutForm
