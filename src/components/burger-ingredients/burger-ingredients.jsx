import burg_ingr_style from './burger-ingredients.module.css'
import Tabs from '../tabs/tabs'
import IngrList from '../ing-list/ingr-list'
import { CustomContext } from '../context/context'
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
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
BurgerIngredients.propTypes = {
  _id: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  data: PropTypes.array,
}
