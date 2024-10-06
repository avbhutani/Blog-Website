import React, { useState } from 'react'
import Header from '../components/Header'
import './LoginRegister.css'

// Login Page.

export default function LoginPage() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')
    async function loginUser(ev) {
        let count = 0;
        ev.preventDefault()
        const res = await fetch('http://localhost:4000/login',{
            method:"POST",
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        if(res.status === 404) {
            setMessage(`404 User Not Found! Try again! You are left with ${count} valid attempts`)
            count--;
            if(count === 0) {
                setMessage(`Tryouts failed! Redirecting to Register Page.`)
                setTimeout(()=>{
                    location.assign('/register')
                },2000)
            }
        }
        else if(res.status === 200) {
            setMessage('Login Successful.')
            setTimeout(() => {
                location.assign('')
            },2000);
        }
    }
    return (
        <>
        <Header />
        <h1>Login</h1>
        <form action="" className="login" onSubmit={loginUser}>
            <input type="text"
            value={username}
            onChange={(ev)=>setUsername(ev.target.value)}
            placeholder="Username" />
            <input type="password" 
            value={password}
            onChange={(ev)=> setPassword(ev.target.value)}
            placeholder="Password" />
            <button>Login</button>
            <h4>{message}</h4>
        </form>
        </>
    )
}