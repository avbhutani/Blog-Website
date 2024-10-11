// The header component.

import { Link, useNavigate } from "react-router-dom"
import './Header.css'
import CheckAccess from "../utils/CheckAccess"
import axios from "axios"

export default function Header() {
  const navigate = useNavigate()
  const user = CheckAccess(null)
  async function logoutUser(event) {
    event.preventDefault()
    try {
      const res = await axios.post('http://localhost:4000/logout',{
        withCredentials:true
      })
      
      navigate('/login')
    }catch(error) {
      console.log('Error Logging Out',error)
    }
  }
    return (
        <header>
        <Link to = '/' className = 'logo'>Home</Link>
      <nav>
        <Link to='/profile'>Profile</Link>
        {user ?<Link to='/logout' onClick={logoutUser}>Logout</Link>:(
        <>  
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        </>
      )}
  
      </nav>
      </header>
    )
}