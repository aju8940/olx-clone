/* eslint-disable no-unused-vars */
import React from 'react'
import OlxLogo from '../../assets/OlxLogo'
import './Login.css'
import { useState } from 'react'
import {FirebaseContext} from '../../store/FirebaseContext'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {firebase} = useContext(FirebaseContext)
    const navigate = useNavigate()
    const handleLogin = (e)=>{
        e.preventDefault()
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate('/')
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
  return (
    <div className='main-div'>
        <div className='content-div'>
            <div className='border-form'>
                <form onSubmit={handleLogin}>
                    <div className='logo'>
                        <OlxLogo/>
                    </div>
                    <div className='heading'>
                        <h4>Enter your email to login.</h4>
                    </div>
                    <div >
                        <input 
                            className='email' 
                            type="email" 
                            placeholder='Email..' 
                            id='email' 
                            name='email'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)} 
                        />
                    </div>
                    <div >
                        <input 
                            className='email' 
                            type="password" 
                            placeholder='Password..' 
                            id='password' 
                            name='password'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)} 
                        />
                    </div>
                    <div>
                        <button type='submit' className='btn'>Login</button>
                    </div>
                    <div className='last-text'>
                        <p>Your email is never shared with external parties nor do we use it to spam you in any way.</p>
                        <a onClick={()=>navigate('/sign-up')} style={{cursor:'pointer',fontSize:'15px'}} ><b>Signup</b></a>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
