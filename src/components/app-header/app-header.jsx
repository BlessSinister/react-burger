import header_style from './app-header.module.css'
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
export default function AppHeader() {
  const authUser = useSelector((state) => state.authUser)
    ? '/profile'
    : '/login'
  const setActive = ({ isActive }) =>
    isActive
      ? `text text_type_main-default ${header_style.active}`
      : `text text_type_main-default ${header_style.a}`
  const setIconTypeConstr =
    window.location.pathname === '/' ? 'primary' : 'secondary'
  const setIconTypeOrder =
    window.location.pathname === '/orderlent' ? 'primary' : 'secondary'
  const setIconTypeProfile =
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
          <ListIcon type={setIconTypeOrder} />
          <p className={`ml-2`}>
            <NavLink to="/orderlent" className={setActive}>
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
