import React, { useState,useRef,useContext,useEffect} from 'react'
import Header from '../../components/header/Header'
import './LoginRegister.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import ReCAPTCHA from "react-google-recaptcha"
import { useCookies } from 'react-cookie'
import CheckAccess from '../../utils/CheckAccess'
// Login Page.
export default function LoginPage() {
    const recaptchaRef = useRef(); 
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')
    const navigate = useNavigate()
    
   
    useEffect(()=> {

        async function checkLoggedStatus() {
            try {
                const res = await axios.get('https://blog-website-backend-40diiyp9n-anubhav-bhutanis-projects.vercel.app/getCurrentUser',{
                withCredentials:true
            })
            if(res)
            {setMessage('No access')
                navigate('/')
                return}
            }
            catch(error) {
                console.log(error)
                return
            }
        }

        checkLoggedStatus()
    })
    
    async function loginUser(event) 
    {
        event.preventDefault()
    
        // ### Unticked for convenience DOS Attack Prevention. ###

        // if(!recaptchaRef.current.getValue()) {
        //     setMessage(`Kindly Tick The Checkbox!`)
        //     return
        // }

        // ### 


        try {
            var res = await axios.post('https://blog-website-backend-40diiyp9n-anubhav-bhutanis-projects.vercel.app/login',{
            username,
            password
        })
        setMessage(res.data.message)
        navigate('/')
        }
        catch(error) 
        {
            console.log(error)
        }

    // This will be executed when the "/login api" is not available
    }

    return (
        <>
        <Header />
        <h1>Login</h1>
        <form  className="login" onSubmit={loginUser}>
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
            <a href="/register">Not a User? Register Now!</a>
        </form>
        </>
    )
}