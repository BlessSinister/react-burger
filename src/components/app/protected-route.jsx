import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedAuth = () => {
  const user = useSelector((state) => state.authUser)

  return user ? <Outlet /> : <Navigate to={'/login'} />
}
export const ProtectedUnAuth = () => {
  const user = useSelector((state) => state.authUser)

  return !user ? <Outlet /> : <Navigate to={'/'} />
}
