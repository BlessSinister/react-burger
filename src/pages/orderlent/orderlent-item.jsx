import React from 'react'
import styles from './orderlent.module.css'
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'
import { modalFlagOrderLent } from '../../services/reducer'
import img1 from '../../images/bun-01.png'

export default function OrderlentItem({
  number,
  createdAt,
  name,
  ingredients,
}) {
  const orderIngridients = useAppSelector((state) => state.burgerIngridients)
  let arrImage = ingredients.map((item) =>
    orderIngridients
      .filter((item1) => item1._id === item)
      .map((item, i) => item.image_mobile)
  )
  let arrPrice = ingredients.map((item) =>
    orderIngridients
      .filter((item1) => item1._id === item)
      .map((item, i) => item.price)
      .reduce((a, b) => a + b, 0)
  )
  arrPrice = arrPrice.reduce((a, b) => a + b, 0)
  arrImage = arrImage.filter((item, i) => (i <= 3 ? item : false))
  console.log(arrPrice)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const setHeight =
    name.length <= 34
      ? `${styles.order_compopnents_wrapper}`
      : name.length >= 77
      ? `${styles.order_compopnents_wrapper_plus_two}`
      : `${styles.order_compopnents_wrapper_plus}`
  const hadleClick = () => {
    navigate('info')
    dispatch(modalFlagOrderLent(true))
  }
  return (
    <div className={`${setHeight} mb-4 p-6`} onClick={hadleClick}>
      <div className={`${styles.title_wrapper} mb-6`}>
        <p>#{number}</p>
        <FormattedDate date={new Date(createdAt)} />
      </div>
      <p className={`${styles.title_burger} mb-6`}>{name}</p>
      <div className={styles.ingridients_wrapper}>
        <div className={`${styles.ingridients_container} mr-6`}>
          {arrImage.map((item, i) => (
            <div className={`${styles.ingridient_item_container} ml-${10 * i}`}>
              <div className={`${styles.ingridient_item_img} `}>
                <img src={item} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.ingridients_price_container}`}>
          <p className={`${styles.ingridients_price} mr-2`}>{arrPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}
