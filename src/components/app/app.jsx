import app_style from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { useState } from 'react'

export default function App() {
  const [orderNumber] = useState('034546')

  return (
    <>
      <header className={app_style.header}>
        <AppHeader />
      </header>
      <main>
        <BurgerIngredients />
        <BurgerConstructor orderNumber={orderNumber} />
      </main>
    </>
  )
}
