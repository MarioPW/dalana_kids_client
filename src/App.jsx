import { Routes, Route } from 'react-router-dom'
import { RegisterForm } from './components/pages/login_register/RegisterForm'
import { Home } from './components/pages/home/Home'
import { Dashboard } from './components/pages/dashboard/Dashboard'
import { useUserContext } from './context/UserContext'
import { MyNavbar } from './components/pages/home/MyNavbar'
import { ProtectedRoute } from './components/protectedRoutes/ProtectedRoute'
import { useEffect } from 'react'
import { ConfirmRegister } from './components/pages/login_register/ConfirmRegister'
import { ResetPasswordForm } from './components/pages/login_register/ResetPasswordForm'

function App() {

  const { user } = useUserContext()


  return (
    <>
      <MyNavbar />
      <div className='w-full mx-auto mt-16 sm:max-w-7xl'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<RegisterForm />} />
          <Route path='/confirm-register' element={<ConfirmRegister />} />
          <Route path='/reset_password_form/:token' element={<ResetPasswordForm />} />
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
