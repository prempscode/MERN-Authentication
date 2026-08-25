import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logout } = useAuth()

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo'>
        MERN AUTH
      </Link>

      <div className='navbar-links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>

        {user ? (
          <>
            <Link to='/content'>Content</Link>

            <button className='logout-btn' onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
