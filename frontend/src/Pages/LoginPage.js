import React, { useState } from 'react'
import Header from '../components/Header'
import './LoginRegister.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// Login Page.

export default function LoginPage() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')

    const navigate = useNavigate()


    async function loginUser(event) {
        event.preventDefault()

        try {const res = await axios.post('http://localhost:4000/login',{
            username,
            password
        })
        setMessage(res.data.message)
        console.log(res)
    }
    catch(error) {
        console.log(error)
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