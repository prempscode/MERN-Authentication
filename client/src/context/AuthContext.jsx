/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'
import api from '../api/axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get('/auth')
        setUser(response.data.user)
      } catch (error) {
        console.log(error.message)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  // REGISTER
  const register = async userData => {
    const response = await api.post('/auth/register', userData)

    setUser(response.data.user)

    return response.data
  }

  // LOGIN
  const login = async userData => {
    const response = await api.post('/auth/login', userData)

    setUser(response.data.user)

    return response.data
  }

  // LOGOUT
  const logout = async () => {
    try {
      await api.post('/auth/logout')
      setUser(null)
    } catch (error) {
      console.log('Logout error:', error.message)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        register,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
