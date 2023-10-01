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
  return (
    <nav>
      <div className={`${header_style.btn_wrapper}`}>
        <div
          className={`${header_style.btn_block_item} pl-5 pr-5 pt-4 pb-4 mr-2`}
        >
          <BurgerIcon type="primary" className={`${header_style.item1_ico} `} />
          <p className={`ml-2`}>
            <NavLink
              to="/"
              className={`text text_type_main-default ${header_style.a}`}
            >
              Конструктор
            </NavLink>
          </p>
        </div>
        <div
          className={`${header_style.btn_block_item} ${header_style.btn_item2} pl-5 pr-5 pt-4 pb-4 mr-2`}
        >
          <ListIcon type="secondary" />
          <p className={`ml-2`}>
            <NavLink
              to="/orderlent"
              className={`text text_type_main-default ${header_style.a1}`}
            >
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
            type="secondary"
            className={`${header_style.item1_ico} `}
          />

          <p className={`ml-2`}>
            <NavLink
              to={authUser}
              className={`text text_type_main-default ${(isActive) =>
                !isActive ? header_style.a1 : header_style.active}`}
            >
              Личный кабинет
            </NavLink>
          </p>
        </div>
      </div>
    </nav>
  )
}
