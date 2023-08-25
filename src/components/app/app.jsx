import app_style from './app.module.css'
import data from '../../utils/data'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import PropTypes from 'prop-types'
export default function App() {
  return (
    <>
      <header className={app_style.header}>
        {/* Не могу её убрать, уменя при помощи неё выровнян блок Appheader, в
        котором содержится сам контент, она выравнивает блок с контентом по
        центру, а внутри самого блока Appheader элементы выравнины по средствам flex, то есть
        если я её уберу блоки изменят своё местоположениее, то есть по сути будет тоже самое,
        для выравнивания просто обертку придётся делать в самом компоненте AppHeader */}
        <AppHeader />
      </header>
      <main>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </>
  )
}
