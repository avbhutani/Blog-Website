// The header component.

import { Link } from "react-router-dom"
import './Header.css'

export default function Header() {
    return (
        <header>
        <Link to = '/' className = 'logo'>Login</Link>
      <nav>
        <Link to='/login'>Login</Link> 
        <Link to='/register'>Register</Link>
      </nav>
      </header>
    )
}