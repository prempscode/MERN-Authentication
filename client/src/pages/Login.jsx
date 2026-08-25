import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const { login } = useAuth()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    setError('')
    setLoading(true)

    try {
      await login(formData)
      navigate('/content')
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className='page'>
      {' '}
      <div className='auth-container'>
        <h1>Login</h1>

        <form className='auth-form' onSubmit={handleSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
          />

          {error && <p>{error}</p>}

          <button type='submit' disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </main>
  )
}

export default Login
