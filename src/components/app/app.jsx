import app_style from './app.module.css'
import AppHeader from '../app-header/app-header'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home'
import Login from '../../pages/login'
import Registr from '../../pages/registr'
import ForgotPass from '../../pages/forgot-pass'
import ResetPass from '../../pages/reset-pass'
import Profile from '../../pages/profile'
import IngridientsInfo from '../../pages/ingridients-info'
import { ProtectedAuth, ProtectedUnAuth } from './protected-route'
import Orders from '../../pages/orders'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { checkFn } from '../../services/actions'
export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkFn())
  })

  return (
    <>
      <header className={app_style.header}>
        <AppHeader />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={<p className={app_style.not_found}>Страница в разработке</p>}
        />
        {/* <Route path="/login" element={<Login />} /> */}

        <Route element={<ProtectedAuth />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/orders" element={<Orders />} />
        </Route>
        <Route element={<ProtectedUnAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registr" element={<Registr />} />
          <Route path="/forgotpass" element={<ForgotPass />} />
          <Route path="/resetpass" element={<ResetPass />} />
        </Route>
        <Route path="/:id" element={<IngridientsInfo />} />
      </Routes>
    </>
  )
}
