import './LoginRegister.css';
import Header from '../components/Header';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator'

// Register Page.

export default function RegisterPage() {
  // The below message state will be managed by the useState functionality.
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  
  // The function that will be responsible for submitting the form.
  async function register(ev) {
    ev.preventDefault();

    // Conditions for successful register
    if(!validator.isEmail(email)) {
      setMessage('Enter a valid Email Address.')
      return
    }
    if(username.length == 0) {
        setMessage('Username cannot be empty!')
        return
    }
    if(!validator.isStrongPassword(password)) {
      setMessage(`Set a  Stronger Password \n
        The password Should Contain: \n
        1. Uppercase (A-Z) \n
        2. Lowercase (a-z) \n
        3. Numbers (0-9) \n
        4. Should be greater than 8 Characters. \n
        `)
      return
    }
    
    
    // The program will wait for this function to complete execution, then 
    // only it will be going to the next line.

    const res = await fetch('http://localhost:4000/register', {
      method: 'POST', // Should likely be POST for registration, not GET
      body: JSON.stringify({ email,username, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    // Depends if the response status is 200 or not.
    if(res.status == 200) {
      setMessage('Registered User Successfully. Redirecting to Login Page.')
      setTimeout(function() {
        location.assign('/login')
      },3000)
    }
    else if(res.status === 401) {
      setMessage('User Already Exists. Kindly login!')
    }
  }

  return (
    <>
      <Header />
      <h1>Register</h1>
      <form className="register" onSubmit={register}>
      <input
          type="string"
          value={email}
          onChange={(ev) => 
            {
              setEmail(ev.target.value)
            }} 
            // Corrected
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