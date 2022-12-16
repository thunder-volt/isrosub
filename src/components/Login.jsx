import React, { useState, useEffect } from 'react'
import "../styles/Login.css"
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        let result = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        result = await result.json();
        console.log(result);
        if (result.auth) {
            localStorage.setItem('user-info', JSON.stringify(result.result));
            localStorage.setItem('token', JSON.stringify(result.auth));

            navigate("/home");
            window.location.reload();

        }
        else {
            alert('Invalid Login');
        }
    }
    return (
        <div className='login-container'>
            <div className="login-title">
                Login
            </div>
            <div className="login-content">
                <input type="email" placeholder='Email' onChange={(e) => {
                    setEmail(e.target.value);
                }} />
                <input type="text" placeholder='Password' onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                <button className='login-btn btn draw-border' onClick={(e) => {
                    handleSubmit(e);
                }}>Login</button>
            </div>
            <Link to='/signup' className='signup-link'>Don't have an account? Sign Up</Link>
        </div>
    )
}

export default Login