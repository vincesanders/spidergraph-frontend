import React from 'react'
import { authios } from 'tools/auth'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'



const FormContainer = styled.div`
width: 70%;
height: 10%
margin: 10px 20px;
display: flex;
justify-content: center;


`

const LabelDiv = styled.div`
width:100%;
margin: 10px`

const GettingStarted = styled.button`
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
            password: ''
        }
    },
    handleSubmit(values, { resetForm }) {
        console.log(values);

        // axios
        //     .post('/api/auth/login/', values)
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
        password: Yup.string()
            .required('This field is required')
            .min(8, 'Enter a password that is at least 8 characters long!')
    })
})(({errors, touched}) => {
    return (
            <FormContainer>
            <Form className='sign-in-form'>
                <LabelDiv>
                <label className='sign-in-label'>
                    <div>Username:
                    </div>
                    <Field type='text' name='username' className="form-input" />
                    {touched.username && errors.username && (<p>{errors.username}</p>)}
                </label>
                </LabelDiv>
                <LabelDiv>
                <label className='sign-in-label'>
                    <div>Password:
                    </div>
                    <Field type='text' name='password' className="form-input" />
                    {touched.password && errors.password && (<p>{errors.password}</p>)}
                </label>
                </LabelDiv>
                <GettingStarted type='submit'>Getting Started</GettingStarted>
            </Form>
            </FormContainer>
       
    );
});
