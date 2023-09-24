import app_style from './app.module.css'
import AppHeader from '../app-header/app-header'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home'
import Login from '../../pages/login'
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
      </Routes>
    </>
  )
}
