import burg_ingr_style from './burger-ingredients.module.css'
import Tabs from '../tabs/tabs'
import IngrList from '../ing-list/ingr-list'

import { useEffect, useState } from 'react'
import Modal from '../modal/modal'
import { useSelector, useDispatch } from 'react-redux'
import { getBurgerIngridientList } from '../../services/actions'
import IngredientDetails from '../ingredient-details/ingredient-details'

interface IburgerIngredientsProps {
  onCloseModal: () => void
}

export default function BurgerIngredients({
  onCloseModal,
}: IburgerIngredientsProps) {
  //@ts-ignore
  const modalIng = useSelector((state) => state.modalIngridientFlag)
  //@ts-ignore
  const data = useSelector((state) => state.burgerIngridients)

  const dispatch = useDispatch()

  const [current, setCurrent] = useState<string>('one')
  useEffect(() => {
    //@ts-ignore
    dispatch(getBurgerIngridientList())
    // dispatch(refreshModalState(JSON.parse(localStorage.getItem('Ing'))))
    if (modalIng) {
      // //@ts-ignore
      // window.history.pushState(
      //   null,
      //   //@ts-ignore
      //   null,
      //   `/${'ingridients/' + localStorage.getItem('targetElem')}`
      // )

      // navigate(`ingridients/${localStorage.getItem('targetElem')}`)
      localStorage.setItem('modalIng', 'true')
    }
  }, [modalIng, dispatch])
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
        <Modal modalIng={modalIng} onCloseModal={onCloseModal}>
          <IngredientDetails />
        </Modal>
      )}
    </section>
  )
}
