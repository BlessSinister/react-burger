import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import React from 'react'
import styles from './profile-orders-info-detailse.module.css'
import { useAppSelector } from '../../services/redux-hooks'

// ,
// ,-.       _,---._ __  / \
// /  )    .-'       `./ /   \
// (  (   ,'            `/    /|
// \  `-"             \'\   / |
// `.              ,  \ \ /  |
//  /`.          ,'-`----Y   |
// (            ;        |   '
// |  ,-.    ,-'         |  /
// |  | (   |React+TS=<3 | /
// )  |  \  `.___________|/
// `--'   `--'
export default function ProfileOrdersInfoDetailse({ orderLentInfo }) {
  let targetElem = orderLentInfo.orders.filter(
    (item) => item._id === localStorage.getItem('setIdTargetOrderProfile')
  )

  const orderIngridients = useAppSelector((state) => state.burgerIngridients)
  let ingredients = targetElem[0].ingredients
  let arrImage = ingredients.map((item) =>
    orderIngridients
      .filter((item1) => item1._id === item)
      .map((item, i) => item.image_mobile)
      .reduce((a, b) => a + b)
  )
  let nameItem = ingredients.map((item) =>
    orderIngridients
      .filter((item1) => item1._id === item)
      .map((item, i) => item.name)
      .reduce((a, b) => a + b)
  )
  let priceItem = ingredients.map((item) =>
    orderIngridients
      .filter((item1) => item1._id === item)
      .map((item, i) => item.price)
      .reduce((a, b) => a + b)
  )
  let summaryPrice = priceItem.reduce((a, b) => a + b, 0)

  console.log(arrImage)
  return (
    <div className={styles.container}>
      {targetElem.map((item, i) => (
        <div className={styles.wrapper}>
          <p className={`${styles.order_number} mb-10`}>#{item.number}</p>
          <h2 className={`${styles.h2} mb-3`}>{item.name}</h2>
          <p className={`${styles.order_status} mb-15`}>
            {item.status === 'done'
              ? 'Выполнено'
              : item.status === 'created'
              ? 'Создано'
              : 'Готовится'}
          </p>
          <p className={`${styles.order_compound}  mb-6`}>Состав:</p>
          <div
            className={`${styles.order_compound_elements_wrapper} ${styles.scroll} mb-5`}
          >
            {arrImage.map((item, i) => (
              <div className={`${styles.order_compound_item_wrapper} mb-4`}>
                <div className={`${styles.ingridient_item_container} mr-4`}>
                  <div className={`${styles.ingridient_item_img}`}>
                    <img src={item} alt="" />
                  </div>
                </div>
                <p className={`${styles.ingridient_item_description}`}>
                  {nameItem[i]}
                </p>
                <div className={styles.price_container}>
                  <p className={`${styles.ingridient_item_count} ml-4 mr-2`}>
                    1 x {priceItem[i]}
                  </p>
                  <CurrencyIcon type="primary" />
                </div>
              </div>
            ))}
          </div>
          <div className={`${styles.summary_price_wrapper}`}>
            {' '}
            <p className={`${styles.date_time}`}>{item.createdAt}</p>
            <div className={`${styles.summary_price_block}`}>
              <p className={`${styles.price} mr-2`}>{summaryPrice}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
