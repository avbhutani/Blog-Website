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
      <nav>
        
        {user ?(
          <div className="header-loggedin">
          <div className="header-loggedin-left">
          <Link to='/' className="home">Home</Link>
          <Link to='/profile' className="profile">My Posts</Link>
          <Link to='/createPost' className="createPost">Create Post</Link>
          </div>
        <div className="header-loggedin-right">
        <Link to='/logout' onClick={logoutUser} className="logout">Logout</Link>
        </div>
          </div>) 
        :(
        <div className="header-loggedout">  
        <Link to='/login' className="login">Login</Link>
        <Link to='/register' className="register">Register</Link>
          </div>
      )}
 </nav>
      </header>
    )
}