import React, { useState, useEffect } from 'react'
import "../styles/Login.css"
import { Link, useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [designation, setDesignation] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    useEffect(() => {
        const authenticator = localStorage.getItem('token');
        if (authenticator) {
            setUser(true);
            navigate("/home")
        }
    }, [])
    const handleSbmit = async (e) => {

        let result = await fetch('http://localhost:5000/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                designation,
                email,
                password
            })
        })
        result = await result.json();
        console.log(result);
        localStorage.setItem('user-info', JSON.stringify(result.result));
        localStorage.setItem('token', JSON.stringify(result.auth));
        navigate('/');
        window.location.reload();
    }

    return (
        <div className='login-container'>
            <div className="login-title">
                SignUp
            </div>
            <div className="signup-content">
                <input type="text" placeholder='Name...' onChange={(e) => {
                    setName(e.target.value);
                }} />
                <input type="text" placeholder='Designation...' onChange={(e) => {
                    setDesignation(e.target.value);
                }} />
                <input type="email" placeholder='Email...' onChange={(e) => {
                    setEmail(e.target.value);
                }} />
                <input type="text" placeholder='Password...' onChange={(e) => {
                    setPassword(e.target.value);
                }} />
                <button className='login-btn btn draw-border' onClick={(e) => {
                    handleSbmit(e);
                }}>Sign Up</button>
            </div>
            <Link to='/login' className='signup-link'>Already have an account? Login</Link>
        </div>
    )
}

export default SignUp