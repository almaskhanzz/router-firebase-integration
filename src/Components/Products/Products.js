import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import './Products.css';

const auth = getAuth(app);
const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Any one here....</h1>
            <p>{user ? user.displayName : 'Nobooooody.....'}</p>
        </div>
    );
};

export default Products;