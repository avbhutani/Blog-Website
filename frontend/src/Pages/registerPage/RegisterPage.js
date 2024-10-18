import '../loginPage/LoginRegister.css';
import Header from '../../components/header/Header';
import { useState,useRef, useEffect } from 'react';
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { useNavigate } from 'react-router-dom';
import CheckAccess from '../../utils/CheckAccess';
// Register Page.

export default function RegisterPage() {
  const recaptchaRef = useRef()
  const userInputRef = useRef()
  const passwordInputRef = useRef()
  const navigate = useNavigate()
  async function onChange(value) {
    console.log(value)
  }

  
  
  // Use States
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')


  useEffect(()=> {

    async function checkLoggedStatus() {
        try {
            const res = await axios.get('http://localhost:4000/getCurrentUser',{
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
      navigate('/')
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
          type="text" ref={userInputRef}
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
          value={password} ref={passwordInputRef}
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
        <a href="/login">Already a User? Login Now!</a>
      </form>
    </>
  );
}