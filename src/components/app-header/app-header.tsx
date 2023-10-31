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

  const setActive = ({ isActive }: any): string =>
    isActive
      ? `text text_type_main-default ${header_style.active}`
      : `text text_type_main-default ${header_style.a}`

  let setIconTypeConstr: string =
    window.location.pathname === '/' ? 'primary' : 'secondary'
  let setIconTypeOrder: string =
    window.location.pathname === '/orderlent' ? 'primary' : 'secondary'
  let setIconTypeProfile: string =
    window.location.pathname === '/profile' ||
    window.location.pathname === '/login' ||
    window.location.pathname === '/profile/orders'
      ? 'primary'
      : 'secondary'
  return (
    <nav>
      <div className={`${header_style.btn_wrapper}`}>
        <div
          className={`${header_style.btn_block_item} pl-5 pr-5 pt-4 pb-4 mr-2`}
        >
          <BurgerIcon
            //@ts-ignore
            type={setIconTypeConstr}
            className={`${header_style.item1_ico} `}
          />
          <p className={`ml-2`}>
            <NavLink to="/" className={setActive}>
              Конструктор
            </NavLink>
          </p>
        </div>
        <div
          className={`${header_style.btn_block_item} ${header_style.btn_item2} pl-5 pr-5 pt-4 pb-4 mr-2`}
        >
          <ListIcon
            //@ts-ignore
            type={setIconTypeOrder}
          />
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
          <ProfileIcon
            //@ts-ignore
            type={setIconTypeProfile}
            className={`${header_style.item1_ico} `}
          />

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
