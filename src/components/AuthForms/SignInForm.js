import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
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

export default withFormik({
  mapPropsToValues() {
    return {
      username: '',
      password: ''
    }
  },
  handleSubmit(values, formikBag) {
    console.log ('--- sign up : handleSubmit ---')
    formikBag.props.trySubmit (values, formikBag)
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required('This field is required')
      .min(4, 'Too short!')
      .max(50, 'Too long!'),
    password: Yup.string()
      .required('This field is required')
      .min(8, 'Enter a password that is at least 8 characters long!')
  })
})(({ errors, touched }) => {

  return (
    <FormContainer className='SignInForm'>
      <Form className='sign-x-form'>
        <LabelDiv>
          <label className='sign-x-label'>
            <div>Username:</div>
            <Field type='text' name='username' className="form-input" />
            {touched.username && errors.username && (<p>{errors.username}</p>)}
          </label>
        </LabelDiv>
        <LabelDiv>
          <label className='sign-x-label'>
            <div>Password:</div>
            <Field type='password' name='password' className="form-input" />
            {touched.password && errors.password && (<p>{errors.password}</p>)}
          </label>
        </LabelDiv>
        <SubmitButton type='submit'>Sign In</SubmitButton>
      </Form>
    </FormContainer>
  );
});
