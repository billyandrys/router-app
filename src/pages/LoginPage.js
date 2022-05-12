import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import useAuth from '../auth/useAuth';


const LoginPage = () => {
    const auth = useAuth()
    const history = useHistory()
    const location = useLocation()
    
    const previusObjectURL = location.state?.from 
    console.log(previusObjectURL)
    const handleLogin =()=>{
        auth.login()
        history.push( previusObjectURL || '/dashboard')
        
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
