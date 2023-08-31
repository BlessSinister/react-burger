import burg_ingr_style from './burger-ingredients.module.css'
import Tabs from '../tabs/tabs'
import IngrList from '../ing-list/ingr-list'
import PropTypes from 'prop-types'
import { CustomContext } from '../hooks/context'
import React, { useContext } from 'react'
import propTypes from '../../utils/props-types'
export default function BurgerIngredients({ data }) {
  const { modalIngFn } = useContext(CustomContext)
  return (
    <section className={`${burg_ingr_style.wrapper} mr-14`}>
      <h1
        className={`mt-10 mb-5 ${burg_ingr_style.h2} text text_type_main-large`}
      >
        Соберите бургер
      </h1>
      <Tabs />
      <IngrList data={data} modalIngFn={modalIngFn} />
    </section>
  )
}
propTypes(BurgerIngredients)

// type,_id,price,image,name
