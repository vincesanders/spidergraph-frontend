import React from 'react';

export default () => {
    return (
        <form>
            <h3>Login</h3>
            <input type='text' placeholder='Username' />
            <input type='password' placeholder='Password' />
            <input type='submit' value='Login' />
        </form>
    );
}