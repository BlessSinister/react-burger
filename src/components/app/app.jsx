import app_style from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { useEffect, useState } from 'react'

export default function App() {
  const url = 'https://norma.nomoreparties.space/api/ingredients'
  const [state, setState] = useState({})
  useEffect(() => {
    try {
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => setState(data))
    } catch (e) {
      console.log(e)
    }
  }, [])

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
        <BurgerIngredients data={state.data} />
        <BurgerConstructor data={state.data} />
      </main>
    </>
  )
}
