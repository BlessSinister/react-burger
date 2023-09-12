import burg_ingr_style from './burger-ingredients.module.css'
import Tabs from '../tabs/tabs'
import IngrList from '../ing-list/ingr-list'

import { useEffect } from 'react'
import Modal from '../modal/modal'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { getBurgerIngridientList } from '../../services/actions'
import IngredientDetails from '../ingredient-details/ingredient-details'

export default function BurgerIngredients() {
  const data = useSelector((state) => state.burgerIngridients)
  const modalIng = useSelector((state) => state.modalIngridientFlag)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBurgerIngridientList)
  }, [])

  return (
    <section className={`${burg_ingr_style.wrapper} mr-14`}>
      <h1
        className={`mt-10 mb-5 ${burg_ingr_style.h2} text text_type_main-large`}
      >
        Соберите бургер
      </h1>
      <Tabs />
      <IngrList data={data} />

      {modalIng && (
        <Modal modalIng={modalIng}>
          <IngredientDetails />
        </Modal>
      )}
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
