import app_style from './app.module.css'
import AppHeader from '../app-header/app-header'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/home/home'
import Login from '../../pages/login/login'
import Registr from '../../pages/registr/registr'
import ForgotPass from '../../pages/forgot-pass/forgot-pass'
import ResetPass from '../../pages/forgot-pass/reset-pass'
import Profile from '../../pages/profile/profile'
import IngridientsInfo from '../../pages/ingridients-info/ingridients-info'
import { ProtectedAuth, ProtectedUnAuth } from './protected-route'
import Orders from '../../pages/orders/orders'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkFn, getBurgerIngridientList } from '../../services/actions'
import Orderlent from '../../pages/orderlent/orderlent'
import { modalFlag } from '../../services/reducer'
export default function App() {
  const dispatch = useDispatch()
  let id = localStorage.getItem('targetElem')
  //@ts-ignore
  const modalIng = useSelector((state) => state.modalIngridientFlag)
  //@ts-ignore
  let ingridient = useSelector((state) => state.burgerIngridients).filter(
    (item: { _id: string }) => item._id === id
  )
  localStorage.setItem('Ing', JSON.stringify(ingridient))
  console.log(ingridient)
  useEffect(() => {
    //@ts-ignore
    dispatch(getBurgerIngridientList())
    if (localStorage.getItem('modalIng')) {
      dispatch(modalFlag(true))
    }
  }, [])

  useEffect(() => {
    //@ts-ignore
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
          element={<IngridientsInfo ingridient={ingridient} />}
        />
        <Route path="/orderlent" element={<Orderlent />} />
      </Routes>
    </>
  )
}
