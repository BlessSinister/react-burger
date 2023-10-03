import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBurgerIngridientList } from '../services/actions'
import styles from './ingridients-info.module.css'

export default function IngridientsInfo() {
  let id = localStorage.getItem('targetElem')
  const ingridient = useSelector((state) => state.burgerIngridients).filter(
    (item) => item._id === id
  )

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBurgerIngridientList())
  }, [dispatch])
  if (ingridient.length === 0) {
    return null
  }
  console.log(ingridient)
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
              <p className={styles.ccal_elem}>{ingridient[0].carbohydrates}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
