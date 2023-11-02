import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../services/redux-hooks'

export const ProtectedAuth = () => {
  const user = useAppSelector((state) => state.authUser)
  const access = localStorage.getItem('accessToken')
  return access || user ? <Outlet /> : <Navigate to={'/login'} />
}
export const ProtectedUnAuth = () => {
  const user = useAppSelector((state) => state.authUser)
  const access = localStorage.getItem('accessToken')
  return !access || !user ? <Outlet /> : <Navigate to={'/'} />
}
