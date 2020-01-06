import React from 'react';
import axios from 'axios';

export default () => {

    function handleSubmit() {

    }

    function handleNewUser() {

    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <input type='submit' value='Login' />
            <p>Don't have an account?</p>
            <button onClick={handleNewUser}>Create One</button>
        </form>
    );
}