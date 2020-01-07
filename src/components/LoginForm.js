import React from 'react';
import axios from 'axios';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

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
        <div>
            <Form>
                <label>Username: 
                    <Field type='text' name='username' />
                    {touched.username && errors.username && (<p>{errors.username}</p>)}
                </label>
                <label>Password: 
                    <Field type='text' name='password' />
                    {touched.password && errors.password && (<p>{errors.password}</p>)}
                </label>
                <button type='submit'>Submit</button>
            </Form>
        </div>
    );
});