import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [retypedPassword, setRetypedPassword] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (isNewUser) {

        } else {
            const values = {
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