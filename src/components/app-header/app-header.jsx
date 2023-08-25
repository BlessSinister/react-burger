import headerStyle from './app-header.module.css'
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from '@ya.praktikum/react-developer-burger-ui-components'

export default function AppHeader() {
  return (
    <nav>
      <div className={`${headerStyle.btn_wrapper}`}>
        <div
          className={`${headerStyle.btn_block_item} pl-5 pr-5 pt-4 pb-4 mr-2`}
        >
          <BurgerIcon type="primary" className={`${headerStyle.item1_ico} `} />
          <p className={`ml-2`}>
            <a
              href="#"
              className={`text text_type_main-default ${headerStyle.a}`}
            >
              Конструктор
            </a>
          </p>
        </div>
        <div
          className={`${headerStyle.btn_block_item} ${headerStyle.btn_item2} pl-5 pr-5 pt-4 pb-4 mr-2`}
        >
          <ListIcon type="secondary" />
          <p className={`ml-2`}>
            <a
              href="#"
              className={`text text_type_main-default ${headerStyle.a1}`}
            >
              Лента заказов
            </a>
          </p>
        </div>
      </div>
      <Logo />
      <div className={`${headerStyle.btn_wrapper}`}>
        <div
          className={`${headerStyle.btn_block_item} ${headerStyle.btn_item2}  pl-5 pr-5 pt-4 pb-4 mr-2`}
        >
          <ProfileIcon
            type="secondary"
            className={`${headerStyle.item1_ico} `}
          />

          <p className={`ml-2 `}>
            <a
              href="#"
              className={`text text_type_main-default ${headerStyle.a1}`}
            >
              Личный кабинет
            </a>
          </p>
        </div>
      </div>
    </nav>
  )
}
