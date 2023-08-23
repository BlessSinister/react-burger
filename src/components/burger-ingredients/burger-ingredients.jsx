import React from 'react'
import ingrStyle from './burger-ingredients.module.css'
import Tabs from '../tabs/tabs'
export default function BurgerIngredients() {
  return (
    <section className={ingrStyle.wrapper}>
      <h1 className={`mt-10 mb-5 ${ingrStyle.h2} text text_type_main-large`}>
        Соберите бургер
      </h1>
      <Tabs />
      <h2 className={`text text_type_main-medium mb-6`}>Булки</h2>
    </section>
  )
}
