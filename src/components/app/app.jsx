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
export default function App() {
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
        <Route path="/login" element={<Login />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/forgotpass" element={<ForgotPass />} />
        <Route path="/resetpass" element={<ResetPass />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ingridients-info" element={<IngridientsInfo />} />
      </Routes>
    </>
  )
}
