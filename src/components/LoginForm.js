import React, { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';

export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [retypedPassword, setRetypedPassword] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);

    const usernameSchema = Yup.string()
        .required('This field is required')
        .min(4, 'Too short!')
        .max(50, 'Too long!');
    const passwordSchema = Yup.string()
        .required('This field is required')
        .min(8, 'Too short!')
        .max(50, 'Too long!');
    const retypedPasswordSchema =  Yup.string()
        .required('This field is required')
        .matches(password, 'The 2 passwords must match!');

    function handleSubmit(e) {
        e.preventDefault();
        const values = {};
        if (isNewUser) {
            if(password === retypedPassword) {
                values = {
                    username: username,
                    password: password
                }
                // axios
            //     .post('/api/auth/register/', values)
            //     .then(res => {
            //         console.log(res);
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     });
            } else {

            }

            

        } else {
            values = {
                username: username,
                password: password
            }
    
            // axios
            //     .post('/api/auth/login/', values)
            //     .then(res => {
            //         console.log(res);
            //     })
            //     .catch(err => {
            //         console.log(err);
            //     });
        }
    }

    function handleNewUser() {
        if (isNewUser) {
            setIsNewUser(false);
        } else {
            setIsNewUser(true);
        }
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleRetypedPassword(e) {
        setRetypedPassword(e.target.value);
    }

    function displayedForm() {
        if (isNewUser) {
            return (
                <form>
                   <h3>Create a new account</h3> 
                   <h3>Login</h3>
                    <input type='text' name='username' placeholder='Username' onChange={handleUsernameChange} />
                    <input type='password' name='password' placeholder='Password' onChange={handlePasswordChange} />
                    <input type='password' name='retypedPassword' placeholder='Re-type Password' onChange={handleRetypedPassword} />
                    <input type='submit' value='Login' />
                    <p>Already have an account?</p>
                    <button onClick={handleNewUser}>Login</button>
                </form>
            );
        }
        return (
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>
                <input type='text' name='username' placeholder='Username' onChange={handleUsernameChange} />
                <input type='password' name='password' placeholder='Password' onChange={handlePasswordChange} />
                <input type='submit' value='Login' />
                <p>Don't have an account?</p>
                <button onClick={handleNewUser}>Create One</button>
            </form>
        );
    }

    return displayedForm();
}