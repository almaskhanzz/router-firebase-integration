import React from 'react';
import './Register.css';
const Register = () => {
    return (
        <div className='register-container'>
            <h2>Please Register!</h2>
            <div className='register-form'>
                <form>
                    <input type="text" placeholder='Name' /> <br />
                    <input type="email" placeholder='Email' name="" /><br />
                    <input type="password" placeholder='Password' name="" /><br />
                    <input type="submit" value="Register" id='submit-btn' />
                </form>
            </div>
        </div>
    );
};

export default Register;