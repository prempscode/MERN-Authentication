import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const { user } = useAuth()

  return (
    <main className='page'>
      <div className='home'>
        <h1>MERN Authentication</h1>

        <p>
          Simple authentication system built with React, Express, MongoDB and
          JWT.
        </p>

        {user ? (
          <div className='home-actions'>
            <p>Welcome, {user.username}</p>

            <Link className='primary-btn btn' to='/content'>
              Go to Content
            </Link>
          </div>
        ) : (
          <div className='home-actions'>
            <Link className='primary-btn btn' to='/register'>
              Register
            </Link>

            <Link className='secondary-btn btn' to='/login'>
              Login
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}

export default Home
