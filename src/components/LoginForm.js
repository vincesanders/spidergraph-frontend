import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit() {
        const values = {
            username: username,
            password: password
        }

        axios
            .post('/api/auth/login/', values)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    function handleNewUser() {

    }

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <input type='text' placeholder='Username' onChange={handleUsernameChange} />
            <input type='password' placeholder='Password' onChange={handlePasswordChange} />
            <input type='submit' value='Login' />
            <p>Don't have an account?</p>
            <button onClick={handleNewUser}>Create One</button>
        </form>
    );
}