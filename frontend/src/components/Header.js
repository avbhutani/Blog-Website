// The header component.

import { Link } from "react-router-dom"
import './Header.css'
import { UserContext } from "../contexts/UserContext"
import { useContext, useEffect } from "react"

export default function Header() {
  const user = useContext(UserContext)
  async function logoutUser(event) {
    event.preventDefault()
  }
    return (
        <header>
        <Link to = '/' className = 'logo'>Home</Link>
      <nav>
        <Link to='/profile'>Profile</Link>
        
        {/* {!user? <Link to='/login'>Login</Link>: <Link to='/logout' onClick={logoutUser}>Logout</Link> } */}
        <Link to='/register'>Register</Link>
      </nav>
      </header>
    )
}