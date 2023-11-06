import React from 'react'
import styles from './orders.module.css'
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useAppSelector } from '../../services/redux-hooks'

interface IOrderProfileItemProps {
  handleClick: () => void
  name: string
  number: number
  createdAt: string
  ingredients: string[]
  status: string
}

export default function OrderProfileItem({
  handleClick,
  name,
  number,
  createdAt,
  ingredients,
  status,
}: IOrderProfileItemProps) {
  console.log(ingredients)
  const orderIngridients = useAppSelector((state) => state.burgerIngridients)

  let arrPrice: number[] = ingredients.map((item) =>
    orderIngridients
      .filter((item1) => item1._id === item)
      .map((item, i) => item.price)
      .reduce((a, b) => a + b, 0)
  )

  let price = arrPrice.reduce((a, b) => a + b, 0)
  console.log(arrPrice)
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
  return (
    <>
      <div
        className={`${styles.order_compopnents_wrapper} mb-4 p-6`}
        onClick={handleClick}
      >
        <div className={`${styles.title_wrapper} mb-6`}>
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
    </>
  )
}