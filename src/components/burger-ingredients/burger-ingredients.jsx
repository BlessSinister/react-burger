import burg_ingr_style from './burger-ingredients.module.css'
import Tabs from '../tabs/tabs'
import IngrList from '../ing-list/ingr-list'
import PropTypes from 'prop-types'

import propTypes from '../../utils/props-types'
export default function BurgerIngredients({ data, modalIngFn }) {
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
BurgerIngredients.propTypes = {
  modalIngFn: PropTypes.func.isRequired,
}
// type,_id,price,image,name
