import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const Register = () => {
    const [user, setUser] = useState('');
    const[error,setError] = useState('');
    const[success,setSuccess] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setSuccess('');
        setError('');
        
        const email = event.target.email.value;
        const password = event.target.password.value;

        //password validation part;

        if(!/(?=.*[a-z])/.test(password)){
            setError('Please enter at least one lower case');
            return;
        }else if(password.length < 6){
            setError('Please enter at least 6 characters');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
                setSuccess('user created successfully!!');
                setError('');
                event.target.reset();
            })
            .catch((error) => {
                console.error(error.message);
                setError(error.message);
                
                
            })
    }
                

    return (
        <div className='w-50 mx-auto container'>
            <h3>Please Register</h3>
            <form onSubmit={handleSubmit}>
                <input className='w-50 mb-4 rounded ps-2' type="email" id="email" name="email" placeholder='email' required /><br />
                <input className='w-50 mb-4 rounded ps-2' type="password" id="password" name="password" placeholder='password' required />
                <br />
                <h2 className='text-success mb-3'>{success}</h2>
                <h3 className='text-danger'>{error}</h3>
                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
               
        </div>
    );
};

export default Register;

                