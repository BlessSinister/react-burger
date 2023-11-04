import React from 'react'
import styles from './orderlent.module.css'
import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../services/redux-hooks'
import { modalFlagOrderLent } from '../../services/reducer'

export default function OrderlentItem({ number, createdAt, name }) {
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
          <div
            className={`${styles.ingridient_item_container} ${styles.ingridient_item_container1}`}
          >
            <div
              className={`${styles.ingridient_item_img} ${styles.ingridient_item_img5}`}
            ></div>
          </div>
          <div
            className={`${styles.ingridient_item_container} ${styles.ingridient_item_container2}`}
          >
            <div
              className={`${styles.ingridient_item_img} ${styles.ingridient_item_img4}`}
            ></div>
          </div>
          <div
            className={`${styles.ingridient_item_container} ${styles.ingridient_item_container3}`}
          >
            <div
              className={`${styles.ingridient_item_img} ${styles.ingridient_item_img3}`}
            ></div>
          </div>
          <div
            className={`${styles.ingridient_item_container} ${styles.ingridient_item_container4}`}
          >
            <div className={`${styles.ingridient_item_img}`}></div>
          </div>
          <div className={`${styles.ingridient_item_container}`}>
            <div
              className={`${styles.ingridient_item_img} ${styles.ingridient_item_img1}`}
            ></div>
          </div>
        </div>

        <div className={`${styles.ingridients_price_container}`}>
          <p className={`${styles.ingridients_price} mr-2`}>480</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  )
}
