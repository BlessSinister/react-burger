import React from 'react'
import styles from './orderlent.module.css'
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'
import { modalFlagOrderLent } from '../../services/reducer'

interface IOrderlentItem {
  number: number
  createdAt: string
  name: string
  ingredients: string[]
  id: string
}
export default function OrderlentItem({
  number,
  createdAt,
  name,
  ingredients,
  id,
}: IOrderlentItem) {
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

  let price = arrPrice.reduce((a, b) => a + b, 0)

  let imgItem = arrImage.filter((item, i) => (i <= 3 ? item : false))
  let arrImg: string[] = []
  for (let key of imgItem) {
    arrImg.push(...key)
  }

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const orderLentInfo = useAppSelector((state) => state.orderLentState)
  // const dataItem = orderLentInfo.filter(
  //   (item) => item._id === localStorage.getItem('orderLentIdElem')
  // )

  const hadleClick = () => {
    dispatch(modalFlagOrderLent(true))
    localStorage.setItem('orderLentIdElem', id)
    localStorage.setItem(
      'orderLentTargetEl',
      JSON.stringify(
        orderLentInfo.filter(
          (item) => item._id === localStorage.getItem('orderLentIdElem')
        )
      )
    )
    navigate(`/feed/${localStorage.getItem('orderLentIdElem')}`)
  }
  return (
    <div
      className={`${styles.order_compopnents_wrapper} mb-4 p-6`}
      onClick={hadleClick}
    >
      <div className={`${styles.title_wrapper} mb-6`}>
        <p>#{number}</p>
        <FormattedDate date={new Date(createdAt)} />
      </div>
      <p className={`${styles.title_burger} mb-6`}>{name}</p>
      <div className={styles.ingridients_wrapper}>
        <div className={`${styles.ingridients_container} mr-6`}>
          {arrImg.map((item: string, i) => (
            <div
              className={`${styles.ingridient_item_container} ml-${10 * i}`}
              key={i}
            >
              <div className={`${styles.ingridient_item_img} `}>
                <img src={item} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.ingridients_price_container}`}>
          <p className={`${styles.ingridients_price} mr-2`}>{price}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}
