import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo'>
        MERN AUTH
      </Link>

      <div className='navbar-links'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>

        {user ? (
          <>
            <NavLink to='/content'>Content</NavLink>

            <button className='logout-btn' onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Login</NavLink>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
