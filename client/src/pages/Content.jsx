import { useAuth } from '../context/AuthContext'

const Content = () => {
  const { user } = useAuth()

  return (
    <main className='page'>
      <div className='content-page'>
        <p className='content-label'>PROTECTED CONTENT</p>

        <h1>
          Welcome, <span>{user?.username}</span>
        </h1>

        <p>You are viewing this page because you are authenticated.</p>

        <div className='auth-status'>
          <p>
            Authentication status:
            <span> Authorized</span>
          </p>

          <p>
            Account:
            <span> {user?.email}</span>
          </p>
        </div>
      </div>
    </main>
  )
}

export default Content
