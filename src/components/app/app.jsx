import React, { useState } from 'react'
import app from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
export default function App() {
  return (
    <>
      <header>
        <AppHeader />
      </header>
      <main>
        <section>
          <BurgerIngredients />
        </section>
        <section>
          <BurgerConstructor />
        </section>
      </main>
    </>
  )
}
