import './LoginRegister.css';
import Header from '../components/Header';
import { useState,useRef } from 'react';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';

import { ToastContainer, toast } from 'react-toastify';
import validator from 'validator'
import { json } from 'react-router-dom';

// Register Page.

export default function RegisterPage() {
  const recaptchaRef = useRef()

  async function onChange(value) {
    console.log(value)
  }

  // Use States
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  async function register(ev) {
    ev.preventDefault();
    
    // Check if the checkbox is ticked or not.
    if(!recaptchaRef.current.getValue()) {
      setMessage(`Kindly Tick The Checkbox!`)
      return
    }

    try{
      const res = await axios.post('http://localhost:4000/register', {
        email,
        username,
        password
      });
      
      setMessage(res.data.message)
    }
    catch(error) {
      recaptchaRef.current.reset()
      console.log(`Axios Error: ${error}`);
    }
  }

  return (
    <>
      <Header />
      <h1>Register</h1>
      <form className="register" onSubmit={register}>
      <input
          type="email"
          value={email}
          onChange={(ev) => 
            {
              setEmail(ev.target.value)
            }} 
            placeholder="Email"
            required />
        <input
          type="text"
          value={username}
          onChange={(ev) => 
            {
              setUsername(ev.target.value)
            }} 
            // Corrected
            placeholder="Username"
            required />

        <input
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)} // Corrected
          placeholder="Password"
          required />
          <ReCAPTCHA
                ref={recaptchaRef}
                sitekey='6LfKZ1oqAAAAAIvlgBIH6CV2SgoSBrGkZKROcbIe'
                onChange={onChange} className='recaptcha'
            />

        <button>Register</button>
        <h4>{message}</h4>
      </form>
    </>
  );
}