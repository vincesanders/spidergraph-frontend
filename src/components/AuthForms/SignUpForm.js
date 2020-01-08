import React from 'react'
import { authios } from 'tools/auth'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'

const FormContainer = styled.div`
width: 70%;
height: 20%
margin: 10px 20px;
display: flex;
justify-content: center;
`

const LabelDiv = styled.div`
width:100%;
margin: 10px`

const Submit = styled.button`
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

color: #FFFFFF;`

export default withFormik({
    mapPropsToValues() {
        return {
            username: '',
            email: '',
            password: '',
            retypedPassword: ''
        }
    },
    handleSubmit(values, { resetForm }) {

        const valuesToSubmit = {username: values.username, password: values.password, email: values.email}; //I don't want to send the retyped password to the bakend.
        console.log(valuesToSubmit);

        // axios
        //     .post('/api/auth/register/', valuesToSubmit)
        //     .then(res => {
        //         setStatus(res.data);
        //         resetForm();
        //     })
        //     .catch(err => console.log(err.response));

        resetForm(); //remove when adding axios
    },
    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('This field is required')
            .min(4, 'Too short!')
            .max(50, 'Too long!'),
        email: Yup.string().email().required('This field is required'),
        password: Yup.string()
            .required('This field is required')
            .min(8, 'Enter a password that is at least 8 characters long!'),
        retypedPassword: Yup.string()
            .required('This field is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match!!!')
    })
})(({errors, touched}) => {
    return (
        <FormContainer>
            <Form className='sign-in-form'>
                <LabelDiv>
                <label className='sign-in-label'>Username:
                    <Field type='text' name='username' className='form-input' />
                    {touched.username && errors.username && (<p>{errors.username}</p>)}
                </label>
                </LabelDiv>
                <LabelDiv>
                <label className='sign-in-label'>Email:
                    <Field type='password' name='email' className='form-input' />
                    {touched.email && errors.email && (<p>{errors.email}</p>)}
                </label>    
                </LabelDiv>
                <LabelDiv>
                <label className='sign-in-label'>Password:
                    <Field type='password' name='password' className='form-input' />
                    {touched.password && errors.password && (<p>{errors.password}</p>)}
                    Confirm Password:
                    <Field type='text' name='retypedPassword' className='form-input' />
                    {touched.retypedPassword && errors.retypedPassword && (<p>{errors.retypedPassword}</p>)}
                </label>
                </LabelDiv>
                <Submit type='submit'>Submit</Submit>
            </Form>
        </FormContainer>
    );
});
