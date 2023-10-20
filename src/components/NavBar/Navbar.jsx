import { Link } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="nav">
          <div className="logo">Logo</div>
          <div className='menu'>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
          </div>
    </nav>
  )
}

export default Navbar
