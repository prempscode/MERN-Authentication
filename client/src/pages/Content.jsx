import { useAuth } from '../context/AuthContext'

const Content = () => {
  const { user } = useAuth()

  return (
    <div>
      <h1>Protected Content</h1>

      <p>Welcome, {user?.username}</p>

      <p>This page can only be accessed by authenticated users.</p>
    </div>
  )
}

export default Content
