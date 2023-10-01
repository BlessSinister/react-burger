import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// export const ProtectedUnAuth = ({ children }) => {
//   // console.log(children)
//   // const user = sessionStorage.getItem('authUser')
//   // return user ? <Navigate to="/" /> : children
// }
export const ProtectedAuth = () => {
  const user = useSelector((state) => state.authUser)

  return user ? <Outlet /> : <Navigate to={'/login'} />
}
export const ProtectedUnAuth = () => {
  const user = useSelector((state) => state.authUser)

  return !user ? <Outlet /> : <Navigate to={'/profile'} />
}
