import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import Content from './pages/Content'
import ProtectedRoute from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route
          path='/content'
          element={
            <ProtectedRoute>
              <Content />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
