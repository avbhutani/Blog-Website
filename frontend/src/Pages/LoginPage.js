import React, { useState,useRef} from 'react'
import Header from '../components/Header'
import './LoginRegister.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";
// Login Page.
export default function LoginPage() {
    const recaptchaRef = useRef(); 
    
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')
    
    async function loginUser(event) 
    {
        event.preventDefault()
        
        if(!recaptchaRef.current.getValue()) {
            setMessage(`Kindly Tick The Checkbox!`)
            return
        }

        try {const res = await axios.post('http://localhost:4000/login',{
            username,
            password
        })
        setMessage(res.data.message)
    }
    catch(error) 
    {
        setMessage(error.response.data.msg)
        recaptchaRef.current.reset()
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
            <ReCAPTCHA
            ref={recaptchaRef}
                sitekey= '6LfKZ1oqAAAAAIvlgBIH6CV2SgoSBrGkZKROcbIe'
                className='recaptcha'
            />
            <button>Login</button>
            <h4>{message}</h4>
        </form>
        </>
    )
}