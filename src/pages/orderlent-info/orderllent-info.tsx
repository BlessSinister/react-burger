import React, { useEffect } from 'react'
import styles from './orderlent-info.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../../components/modal/modal'
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'
import {
  modalFlag,
  modalFlagOrderLent,
  modalOrderFlag,
  orderInfoGetter,
} from '../../services/reducer'
import OrderlentInfoDetails from '../orderlent-info-detailse/orderlent-info-details'
import { useNavigate } from 'react-router-dom'
import { IOrder, Idata } from '../../utils/data'
import { getBurgerIngridientList } from '../../services/actions'

export default function OrderlentInfo() {
  const navigate = useNavigate()

  const modalOrderLent = useAppSelector((state) => state.modalOrderLentFlag)
  const dispatch = useAppDispatch()
  const onCloseModal = () => {
    dispatch(modalOrderFlag(false))
    dispatch(modalFlag(false))
    dispatch(orderInfoGetter('Wait order number'))
    dispatch(modalFlagOrderLent(false))

    if (
      window.location.pathname ===
      `/feed/${localStorage.getItem('orderLentIdElem')}`
    ) {
      navigate('/feed')
    }
  }

  const orderLentInfo = useAppSelector((state) => state.orderLentState)

  let dataTargetEl = JSON.parse(
    //@ts-ignore
    localStorage.getItem('orderLentTargetEl')
  )
  const orderIngridients = JSON.parse(
    //@ts-ignore
    localStorage.getItem('allIngredients')
  )
  let ingredients = dataTargetEl[0].ingredients

  let arrImage: string[] = ingredients.map((item: string) =>
    orderIngridients
      .filter((item1: { _id: string }) => item1._id === item)
      .map((item: Idata) => item.image_mobile)
      .reduce((a: string, b: string) => a + b)
  )
  let nameItem: string[] = ingredients.map((item: string) =>
    orderIngridients
      .filter((item1: { _id: string }) => item1._id === item)
      .map((item: Idata) => item.name)
      .reduce((a: string, b: string) => a + b)
  )
  let priceItem: number[] = ingredients.map((item: string) =>
    orderIngridients
      .filter((item1: { _id: string }) => item1._id === item)
      .map((item: Idata) => item.price)
      .reduce((a: number, b: number) => a + b)
  )
  let summaryPrice: number = priceItem.reduce((a, b) => a + b, 0)
  console.log(orderLentInfo)
  return modalOrderLent ? (
    <Modal modalOrderLent={modalOrderLent} onCloseModal={onCloseModal}>
      {modalOrderLent && <OrderlentInfoDetails orderLentInfo={orderLentInfo} />}
    </Modal>
  ) : (
    <div className={styles.container}>
      {dataTargetEl.map((item: IOrder, i: number) => (
        <div className={styles.wrapper} key={i}>
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
            className={`${styles.order_compound_elements_wrapper} ${styles.scroll} mb-10`}
          >
            {arrImage.map((item, i) => (
              <div
                className={`${styles.order_compound_item_wrapper} mb-4`}
                key={i}
              >
                <div className={`${styles.ingridient_item_container} mr-4`}>
                  <div className={`${styles.ingridient_item_img}`}>
                    <img src={item} alt="" />
                  </div>
                </div>
                <p className={`${styles.ingridient_item_description}`}>
                  {nameItem[i]}
                </p>
                <div className={`${styles.price_wrapper}`}>
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
