import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBurgerIngridientList } from '../services/actions'
import styles from './ingridients-info.module.css'
import IngredientDetails from '../components/ingredient-details/ingredient-details'
import Modal from '../components/modal/modal'
import { modalFlag, refreshModalState } from '../services/reducer'

export default function IngridientsInfo({ onCloseModal }) {
  const dispatch = useDispatch()
  let id = localStorage.getItem('targetElem')
  const modalIng = useSelector((state) => state.modalIngridientFlag)
  let ingridient = useSelector((state) => state.burgerIngridients).filter(
    (item) => item._id === id
  )
  localStorage.setItem('Ing', JSON.stringify(ingridient))

  useEffect(() => {
    dispatch(getBurgerIngridientList())
    if (localStorage.getItem('modalIng')) {
      dispatch(modalFlag(true))
    }
  }, [])

  if (ingridient.length === 0) {
    return null
  }

  if (modalIng) {
    return (
      <Modal modalIng={modalIng} onCloseModal={onCloseModal}>
        <IngredientDetails />
      </Modal>
    )
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.h2}>Детали ингредиента</h2>
          <div className={styles.img_wrapper}>
            <img src={ingridient[0].image_large} alt="ingridient_image" />
          </div>
          <div className={styles.info_wrapper}>
            <p className={styles.p}>Биокотлета из марсианской Магнолии</p>
            <div className={styles.calorie_wrapper}>
              <div className={styles.ccal_wrapper}>
                <p>Калории,ккал</p>
                <p className={styles.ccal_elem}>{ingridient[0].calories}</p>
              </div>
              <div className={styles.ccal_wrapper}>
                <p>Белки, г</p>
                <p className={styles.ccal_elem}>{ingridient[0].proteins}</p>
              </div>
              <div className={styles.ccal_wrapper}>
                <p>Жиры, г</p>
                <p className={styles.ccal_elem}>{ingridient[0].fat}</p>
              </div>
              <div className={styles.ccal_wrapper}>
                <p>Углеводы, г</p>
                <p className={styles.ccal_elem}>
                  {ingridient[0].carbohydrates}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
