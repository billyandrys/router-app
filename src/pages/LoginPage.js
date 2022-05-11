import React from 'react';
import useAuth from '../auth/useAuth';

const LoginPage = () => {
    const auth = useAuth()
    const handleLogin =()=>{
        auth.login()
    }
    return (
        <div>
            Login
            <button onClick={handleLogin}>
                Sign-In
            </button>
        </div>
    );
}

export default LoginPage;
