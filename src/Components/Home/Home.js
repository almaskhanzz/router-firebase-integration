import React from 'react';
import app from '../../firebase.init';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Home.css';

const auth = getAuth(app);
const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>User Information</h1>
            <p>Current user is: {user ? user.displayName : 'nobody logged in'} </p>
        </div>
    );
};

export default Home;