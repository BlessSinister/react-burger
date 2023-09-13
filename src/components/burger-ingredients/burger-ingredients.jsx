import burg_ingr_style from './burger-ingredients.module.css'
import Tabs from '../tabs/tabs'
import IngrList from '../ing-list/ingr-list'

import { useEffect, useState } from 'react'
import Modal from '../modal/modal'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { getBurgerIngridientList } from '../../services/actions'
import IngredientDetails from '../ingredient-details/ingredient-details'

export default function BurgerIngredients() {
  const data = useSelector((state) => state.burgerIngridients)
  const modalIng = useSelector((state) => state.modalIngridientFlag)
  const dispatch = useDispatch()
  const [current, setCurrent] = useState('one')
  useEffect(() => {
    dispatch(getBurgerIngridientList)
  }, [])
  let titlePlace = document.getElementById('main_bun')

  const tabScrollChanger = () => {
    if (titlePlace !== null) {
      if (
        titlePlace.getBoundingClientRect().y <= 283 &&
        titlePlace.getBoundingClientRect().y >= 123
      ) {
        setCurrent('one')
      } else if (
        titlePlace.getBoundingClientRect().y <= 18 &&
        titlePlace.getBoundingClientRect().y >= -400
      ) {
        setCurrent('two')
      } else if (titlePlace.getBoundingClientRect().y <= -508) {
        setCurrent('three')
      }
    }
  }
  return (
    <section className={`${burg_ingr_style.wrapper} mr-14`}>
      <h1
        className={`mt-10 mb-5 ${burg_ingr_style.h2} text text_type_main-large`}
      >
        Соберите бургер
      </h1>
      <Tabs tabChanger={tabScrollChanger} current={current} />
      <IngrList data={data} tabScrollChanger={tabScrollChanger} />

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
