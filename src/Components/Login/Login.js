import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import './Login.css';

const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    }
    return (
        <div className='login-container'>
            <h2>Please login!</h2>
            <div className='btn-container'>
                <button className='btn-google' onClick={handleGoogleSignIn}>SignIn with Google</button>
            </div>
            <p className='or'>OR</p>
            <div className='login-form'>
                <form>
                    <input type="email" placeholder='Email' name="" /><br />
                    <input type="password" placeholder='Password' name="" /><br />
                    <input type="submit" value="Login" id="submit-btn" />
                </form>
            </div>
        </div>
    );
};

export default Login;