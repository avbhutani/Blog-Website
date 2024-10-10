// The header component.

import { Link } from "react-router-dom"
import './Header.css'

export default function Header() {
    return (
        <header>
        <Link to = '/' className = 'logo'>Home</Link>
      <nav>
        <Link to='/profile'>Profile</Link>
        <Link to='/login'>Login</Link> 
        <Link to='/register'>Register</Link>
      </nav>
      </header>
    )
}