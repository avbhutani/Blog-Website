import React, { useState,useRef,useEffect} from 'react'
import Header from '../components/Header'
import './LoginRegister.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha";
import { useCookies } from 'react-cookie';
import CheckAccess from '../utils/CheckAccess'
// Login Page.
export default function LoginPage() {
    const recaptchaRef = useRef(); 
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')
    const navigate = useNavigate()
    async function loginUser(event) 
    {
        event.preventDefault()
        
        // ### Unticked for convenience ###

        // if(!recaptchaRef.current.getValue()) {
        //     setMessage(`Kindly Tick The Checkbox!`)
        //     return
        // }

        // ### 


        try {
            const res = await axios.post('http://localhost:4000/login',{
            username,
            password
        })
        setMessage(res.data.message)
        console.log(res.data.token)
        navigate('/')
    }
    catch(error) 
    {
        setMessage(res.data.message)
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
            {/* <ReCAPTCHA
            ref={recaptchaRef}
                sitekey= '6LfKZ1oqAAAAAIvlgBIH6CV2SgoSBrGkZKROcbIe'
                className='recaptcha'
            /> */}
            <button>Login</button>
            <h4>{message}</h4>
        </form>
        </>
    )
}