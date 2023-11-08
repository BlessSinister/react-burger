import header_style from './app-header.module.css'
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from '@ya.praktikum/react-developer-burger-ui-components'

import { NavLink } from 'react-router-dom'
import { useAppSelector } from '../../services/redux-hooks'
export default function AppHeader() {
  const authUser = useAppSelector((state) => state.authUser)
    ? '/profile'
    : '/login'

  const setActive = ({
    isActive,
  }: {
    isActive: boolean
    isPending: boolean
  }): string =>
    isActive
      ? `text text_type_main-default ${header_style.active}`
      : `text text_type_main-default ${header_style.a}`

  let setIconTypeConstr =
    window.location.pathname === '/' ? (
      <BurgerIcon type="primary" />
    ) : (
      <BurgerIcon type="secondary" />
    )

  let setIconTypeOrder =
    window.location.pathname === '/feed' ? (
      <ListIcon type="primary" />
    ) : (
      <ListIcon type="secondary" />
    )
  let setIconTypeProfile =
    window.location.pathname === '/profile' ||
    window.location.pathname === '/login' ||
    window.location.pathname === '/profile/orders' ? (
      <ProfileIcon type="primary" />
    ) : (
      <ProfileIcon type="secondary" />
    )
  return (
    <nav>
      <div className={`${header_style.btn_wrapper}`}>
        <div
          className={`${header_style.btn_block_item} pl-5 pr-5 pt-4 pb-4 mr-2`}
        >
          {setIconTypeConstr}
          <p className={`ml-2`}>
            <NavLink to="/" className={setActive}>
              Конструктор
            </NavLink>
          </p>
        </div>
        <div
          className={`${header_style.btn_block_item} ${header_style.btn_item2} pl-5 pr-5 pt-4 pb-4 mr-2`}
        >
          {setIconTypeOrder}
          <p className={`ml-2`}>
            <NavLink to="/feed" className={setActive}>
              Лента заказов
            </NavLink>
          </p>
        </div>
      </div>
      <Logo />
      <div className={`${header_style.btn_wrapper}`}>
        <div
          className={`${header_style.btn_block_item} ${header_style.btn_item2}  pl-5 pr-5 pt-4 pb-4 mr-2`}
        >
          {setIconTypeProfile}
          <p className={`ml-2`}>
            <NavLink to={authUser} className={setActive}>
              Личный кабинет
            </NavLink>
          </p>
        </div>
      </div>
    </nav>
  )
}
