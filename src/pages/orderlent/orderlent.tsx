import styles from './orderlent.module.css'

import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'

import OrderlentItem from './orderlent-item'
import { useEffect } from 'react'
import { getOrderLentInfo } from '../../services/actions'
export default function Orderlent() {
  const totalOrder = useAppSelector((state) => state.totalOrder.total)

  const totalToday: number = useAppSelector(
    (state) => state.totalOrder.totalToday
  )
  const dispatch = useAppDispatch()
  const orderLentInfo = useAppSelector((state) => state.orderLentState)
  //@ts-ignore

  useEffect(() => {
    dispatch(getOrderLentInfo())
  }, [dispatch])
  //Открытие вебсокета ленты, думаю, что лучше будет сделать открытие, когда человек заходит на главную,
  //Тогда когда он будет входить на страницу ленты, она будет уже загружена
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.h2}>Лента заказов</h2>
        <main className={styles.main}>
          <div
            className={`${styles.order_numbers_block} ${styles.scroll} mr-15`}
          >
            <div>
              {orderLentInfo.map((item, i) => (
                <OrderlentItem
                  number={item.number}
                  name={item.name}
                  createdAt={item.createdAt}
                  ingredients={item.ingredients}
                  id={item._id}
                  key={i}
                />
              ))}
            </div>
          </div>

          <div className={`${styles.order_info_block}`}>
            <div className={`${styles.order_status_blocks_wrapper} mb-15`}>
              <div className={`${styles.order_status_ready_block} mr-9`}>
                <h3 className={`${styles.h3} mb-6`}>Готовы:</h3>

                {orderLentInfo.map((item, i) =>
                  item.status === 'done' && i <= 12 ? (
                    <p className={`${styles.order_ready_number} mb-2`} key={i}>
                      {item.number}
                    </p>
                  ) : null
                )}
              </div>
              <div className={styles.order_status_process_block}>
                <h3 className={`${styles.h3} mb-6`}>В работе:</h3>
                {orderLentInfo.map((item, i) =>
                  item.status !== 'done' && i <= 4 ? (
                    <p
                      className={`${styles.order_process_number} mb-2`}
                      key={i}
                    >
                      {item.number}
                    </p>
                  ) : null
                )}
              </div>
            </div>
            <h3 className={`${styles.h3} mb-6`}>Выполнено за все время:</h3>
            <p className={`${styles.all_orders_numbers} mb-15`}>{totalOrder}</p>
            <h3 className={`${styles.h3}`}>Выполнено сегодня:</h3>
            <p className={`${styles.all_orders_numbers}`}>{totalToday}</p>
          </div>
        </main>
      </div>
    </div>
  )
}
