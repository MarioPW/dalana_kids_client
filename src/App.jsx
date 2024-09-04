import { Routes, Route } from 'react-router-dom'
import { RegisterForm } from './components/pages/login_register/RegisterForm'
import { Home } from './components/pages/home/Home'
import { Dashboard } from './components/pages/dashboard/Dashboard'
import { useUserContext } from './context/UserContext'
import { MyNavbar } from './components/pages/home/MyNavbar'
import { ProtectedRoute } from './components/protectedRoutes/ProtectedRoute'
import { useEffect } from 'react'
import { ConfirmRegister } from './components/pages/login_register/ConfirmRegister'

function App() {

  const { setToken, setButtonText } = useUserContext()

  useEffect(() => {
    const token = sessionStorage.getItem('dalanaKidsSession')
    if (token) {
      setToken(token)
      setButtonText("Salir")
    }
  }, [])
  return (
    <>
      <MyNavbar />
      <div className='w-full mx-auto mt-16 sm:max-w-7xl'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/confirm-register' element={<ConfirmRegister />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
