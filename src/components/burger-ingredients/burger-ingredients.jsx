import React from 'react'
import ingrStyle from './burger-ingredients.module.css'
import Tabs from '../tabs/tabs'
import IngrList from '../ing-list/ingr-list'

export default function BurgerIngredients({ data }) {
  return (
    <section className={ingrStyle.wrapper}>
      <h1 className={`mt-10 mb-5 ${ingrStyle.h2} text text_type_main-large`}>
        Соберите бургер
      </h1>
      <Tabs />
      <IngrList data={data} />
    </section>
  )
}
