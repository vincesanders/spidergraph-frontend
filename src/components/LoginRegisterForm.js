import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

export default () => {
    const [isNewUser, setIsNewUser] = useState(false);

    function handleNewUser() {
        if (isNewUser) {
            setIsNewUser(false);
        } else {
            setIsNewUser(true);
        }
    }

    function displayedForm() {
        if (isNewUser) {
            return (
                <div>
                    <p>Already have an account?</p>
                    <button onClick={handleNewUser}>Login</button>
                </div>
            );
        }
        return (
            <div>
                <LoginForm />
                <p>Don't have an account?</p>
                <button onClick={handleNewUser}>Create One</button>
            </div>
        );
    }
    return displayedForm();
}