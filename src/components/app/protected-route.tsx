import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../../services/redux-hooks'

export const ProtectedAuth = () => {
  const user = useAppSelector((state) => state.authUser)

  return user ? <Outlet /> : <Navigate to={'/login'} />
}
export const ProtectedUnAuth = () => {
  const user = useAppSelector((state) => state.authUser)

  return !user ? <Outlet /> : <Navigate to={'/'} />
}
