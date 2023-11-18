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
import { useDispatch, useSelector } from 'react-redux'
import { checkFn, getBurgerIngridientList } from '../../services/actions'
import Orderlent from '../../pages/orderlent'
import { modalFlag } from '../../services/reducer'
export default function App() {
  const dispatch = useDispatch()
  let id = localStorage.getItem('targetElem')
  const modalIng = useSelector((state) => state.modalIngridientFlag)
  let ingridient = useSelector((state) => state.burgerIngridients).filter(
    (item) => item._id === id
  )
  localStorage.setItem('Ing', JSON.stringify(ingridient))

  useEffect(() => {
    dispatch(getBurgerIngridientList())
    if (localStorage.getItem('modalIng')) {
      dispatch(modalFlag(true))
    }
  }, [])

  useEffect(() => {
    dispatch(checkFn())
  }, [])

  return (
    <>
      <header className={app_style.header}>
        <AppHeader />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<p className={app_style.not_found}>404</p>} />

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
        <Route
          path="/ingridients/:id"
          element={
            <IngridientsInfo modalIng={modalIng} ingridient={ingridient} />
          }
        />
        <Route path="/orderlent" element={<Orderlent />} />
      </Routes>
    </>
  )
}
