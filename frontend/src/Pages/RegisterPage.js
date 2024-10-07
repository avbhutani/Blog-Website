import './LoginRegister.css';
import Header from '../components/Header';
import { useState } from 'react';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer, toast } from 'react-toastify';
import validator from 'validator'
import { json } from 'react-router-dom';

// Register Page.

export default function RegisterPage() {

  // Use States
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')

  async function register(ev) {
    ev.preventDefault();
    
    try{
      const res = await axios.post('http://localhost:4000/register', {
        email,
        username,
        password
      });
      setMessage(res.data.message)
    }
    catch(error) {
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
            />
        <input
          type="text"
          value={username}
          onChange={(ev) => 
            {
              setUsername(ev.target.value)
            }} 
            // Corrected
            placeholder="Username"
            />

        <input
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)} // Corrected
          placeholder="Password"
          />

        <button>Register</button>
        <h4>{message}</h4>
      </form>
    </>
  );
}