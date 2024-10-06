import React, { useState } from 'react'
import Header from '../components/Header'
import './LoginRegister.css'
import { useNavigate } from 'react-router-dom'
// Login Page.

export default function LoginPage() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')
    const navigate = useNavigate()
    const [invalidAttempts, setInvalidAttempts] = useState(3)
    async function loginUser(ev) {
        var count = 3;
        // let [count,setCount] = useState(3)
        ev.preventDefault()
        const res = await fetch('http://localhost:4000/login',{
            method:"POST",
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        })
        if(res.status === 404) {
            setInvalidAttempts((invalidAttempts)=> invalidAttempts - 1)
            setMessage(`404 User Not Found! Try again! You are left with ${invalidAttempts} valid attempts`)
            setTimeout(()=> {
                setMessage(``)
            },2000)
            if(invalidAttempts == 0) {
                setMessage(`Tryouts failed! Redirecting to Register Page.`)
                setTimeout(()=>{
                    navigate('/register')
                },2000)
            }
        }
        else if(res.status === 401) {
            setMessage(`Check Password and Try Again.`)
            setTimeout(()=> {setMessage('')},2000)
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
            placeholder="Username" required/>
            <input type="password" 
            value={password}
            onChange={(ev)=> setPassword(ev.target.value)}
            placeholder="Password" required />
            <button>Login</button>
            <h4>{message}</h4>
        </form>
        </>
    )
}