import app_style from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { useContext, useEffect, useState } from 'react'
import { getData } from '../../utils/api'
import { CustomContext } from '../context/context'

export default function App() {
  const { setState, state } = useContext(CustomContext)
  const [orderNumber] = useState('034546')

  useEffect(() => {
    getData().then((data) => setState(data))
  }, [setState])

  return (
    <>
      <header className={app_style.header}>
        <AppHeader />
      </header>
      <main>
        <BurgerIngredients data={state.data} />
        <BurgerConstructor data={state.data} orderNumber={orderNumber} />
      </main>
    </>
  )
}
