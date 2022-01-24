import React, { useState } from 'react';
import { Link , useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => {
        e.preventDefault(); //readymate function

        auth
            .signInWithEmailAndPassword(email,password)
            .then((auth) => {
                // it successfully login a new user with email and password
                if(auth){
                    history.push('/')

                }
            }

            )
            .catch(error => alert(error.message))
            
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully create a new user with email and password
                if(auth){
                    history.push('/')

                }
            })
            .catch(error => alert(error.message))

            
    }
    return (
        <div className='login'>
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt='amazon' />
            </Link>
            <div className='login__container'>
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn} className='login__signButton'>Sign In</button>

                </form>
                <p>By continuing, you agree to Amazon's Condition of use and Privacy Notice, Our Cookies Notice and Interest Based Ads Notice

                </p>
                <button type='submit' onClick={register} className='login__registration'>Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login
