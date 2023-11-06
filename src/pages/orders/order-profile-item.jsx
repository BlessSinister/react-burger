import React from 'react'
import styles from './orders.module.css'
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'
import { modalFlagProfileOrderLent } from '../../services/reducer'

// interface IOrderProfileItemProps {
//   handleClick: () => void
//   name: string
//   number: number
//   createdAt: string
//   ingredients: string[]
//   status: string
//   id: string
// }

export default function OrderProfileItem({
  name,
  number,
  createdAt,
  ingredients,
  status,
  id,
  handleClick,
}) {
  const targetOrderElem = () => {
    localStorage.setItem('targetOrderElem', id)
  }
  const orderIngridients = useAppSelector((state) => state.burgerIngridients)

  const orderLentInfo = useAppSelector((state) => state.profileOrderLentState)

  let arrPrice = ingredients.map((item) =>
    orderIngridients
      .filter((item1) => item1._id === item)
      .map((item, i) => item.price)
      .reduce((a, b) => a + b, 0)
  )

  let price = arrPrice.reduce((a, b) => a + b, 0)

  let arrImage = ingredients.map((item) =>
    orderIngridients
      .filter((item1) => item1._id === item)
      .map((item, i) => item.image_mobile)
      .reduce((a, b) => a + b)
  )

  let statusSuccess =
    status === 'done' ? `${styles.status_success}` : `${styles.status_simple}`
  let statusName =
    status === 'done'
      ? 'Выполнено'
      : status === 'created'
      ? 'Создано'
      : 'Готовится'

  const setIdTarget = () => {
    localStorage.setItem('setIdTargetOrderProfile', id)
    localStorage.setItem(
      'setTargetOrderProfile',
      JSON.stringify(
        orderLentInfo.orders.filter(
          (item) => item._id === localStorage.getItem('setIdTargetOrderProfile')
        )
      )
    )
  }

  return (
    <div onClick={setIdTarget}>
      <div
        className={`${styles.order_compopnents_wrapper} mb-4 p-6`}
        onClick={handleClick}
      >
        <div
          className={`${styles.title_wrapper} mb-6`}
          onClick={targetOrderElem}
        >
          <p className={styles.number_style}>#{number}</p>
          <FormattedDate date={new Date(createdAt)} />
        </div>
        <p className={`${styles.title_burger} mb-2`}>{name}</p>
        <p className={`${statusSuccess} mb-6`}>{statusName}</p>
        <div className={styles.ingridients_wrapper}>
          <div className={`${styles.ingridients_container} mr-6`}>
            {arrImage.map((item, i) => (
              <div
                className={`${styles.ingridient_item_container} ml-${10 * i}`}
                key={i}
              >
                <div
                  className={`${styles.ingridient_item_img} ${styles.ingridient_item_img5}`}
                >
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
    </div>
  )
}
