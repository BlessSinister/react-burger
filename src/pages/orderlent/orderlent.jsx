import styles from './orderlent.module.css'
import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'

import { getOrderLentInfo } from '../../services/actions'
import OrderlentItem from './orderlent-item'

export default function Orderlent() {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getOrderLentInfo())
  }, [])
  const orderLentInfo = useAppSelector((state) => state.orderLentState)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.h2}>Лента заказов</h2>
        <main className={styles.main}>
          <div
            className={`${styles.order_numbers_block} ${styles.scroll} mr-15`}
          >
            <div>
              {orderLentInfo.map((item) => (
                <OrderlentItem
                  number={item.number}
                  name={item.name}
                  createdAt={item.createdAt}
                  ingredients={item.ingredients}
                />
              ))}
            </div>
          </div>

          <div className={`${styles.order_info_block}`}>
            <div className={`${styles.order_status_blocks_wrapper} mb-15`}>
              <div className={`${styles.order_status_ready_block} mr-9`}>
                <h3 className={`${styles.h3} mb-6`}>Готовы:</h3>
                <p className={`${styles.order_ready_number} mb-2`}>034533</p>
                <p className={`${styles.order_ready_number} mb-2`}>034532</p>
                <p className={`${styles.order_ready_number} mb-2`}>034530</p>
                <p className={`${styles.order_ready_number} mb-2`}>034527</p>
                <p className={`${styles.order_ready_number} mb-2`}>034525</p>
              </div>
              <div className={styles.order_status_process_block}>
                <h3 className={`${styles.h3} mb-6`}>В работе:</h3>
                <p className={`${styles.order_process_number} mb-2`}>034538</p>
                <p className={`${styles.order_process_number} mb-2`}>034541</p>
                <p className={`${styles.order_process_number} mb-2`}>034542</p>
              </div>
            </div>
            <h3 className={`${styles.h3} mb-6`}>Выполнено за все время:</h3>
            <p className={`${styles.all_orders_numbers} mb-15`}>28 752</p>
            <h3 className={`${styles.h3}`}>Выполнено сегодня:</h3>
            <p className={`${styles.all_orders_numbers}`}>138</p>
          </div>
        </main>
      </div>
    </div>
  )
}
