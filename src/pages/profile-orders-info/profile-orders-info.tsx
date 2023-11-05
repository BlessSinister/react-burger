import React, { useEffect } from 'react'
import styles from './profile-orders-info.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'
import Modal from '../../components/modal/modal'
import {
  modalFlag,
  modalFlagOrderLent,
  modalFlagProfileOrderLent,
  modalOrderFlag,
  orderInfoGetter,
} from '../../services/reducer'
import ProfileOrdersInfoDetailse from '../profile-orders-info-detailse/profile-orders-info-detailse'
import { useNavigate } from 'react-router-dom'
export default function ProfileOrdersInfo() {
  const modalProfileOrderLent = useAppSelector(
    (state) => state.modalProfileOrderLentFlag
  )

  const dispatch = useAppDispatch()
  const onCloseModal = () => {
    dispatch(modalOrderFlag(false))
    dispatch(modalFlag(false))
    dispatch(orderInfoGetter('Wait order number'))
    dispatch(modalFlagOrderLent(false))
    dispatch(modalFlagProfileOrderLent(false))
  }

  // const navigate = useNavigate()   // navigate('/profile/orders/') в случае необходимости возврата в историю заказов
  //Вынеси отдельно в компонент модалку с юзнавигейтом, чтобы можно было использовать текущую страницу в протектед роутс
  return modalProfileOrderLent ? (
    <Modal
      modalProfileOrderLent={modalProfileOrderLent}
      onCloseModal={onCloseModal}
    >
      {modalProfileOrderLent && <ProfileOrdersInfoDetailse />}
    </Modal>
  ) : (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={`${styles.order_number} mb-10`}>#034533</p>
        <h2 className={`${styles.h2} mb-3`}>
          Black Hole Singularity острый бургер
        </h2>
        <p className={`${styles.order_status} mb-15`}>Выполнен</p>
        <p className={`${styles.order_compound}  mb-6`}>Состав:</p>
        <div
          className={`${styles.order_compound_elements_wrapper} ${styles.scroll} mb-10`}
        >
          <div className={`${styles.order_compound_item_wrapper} mb-4`}>
            <div className={`${styles.ingridient_item_container} mr-4`}>
              <div className={`${styles.ingridient_item_img1}`}></div>
            </div>
            <p className={`${styles.ingridient_item_description}`}>
              Флюоресцентная булка R2-D3
            </p>
            <p className={`${styles.ingridient_item_count} ml-4 mr-2`}>
              2 x 20
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <div className={`${styles.order_compound_item_wrapper} mb-4`}>
            <div className={`${styles.ingridient_item_container} mr-4`}>
              <div className={`${styles.ingridient_item_img2}`}></div>
            </div>
            <p className={`${styles.ingridient_item_description}`}>
              Филе Люминесцентного тетраодонтимформа
            </p>
            <p className={`${styles.ingridient_item_count} mr-2`}>1 x 300</p>
            <CurrencyIcon type="primary" />
          </div>
          <div className={`${styles.order_compound_item_wrapper} mb-4`}>
            <div className={`${styles.ingridient_item_container} mr-4`}>
              <div className={`${styles.ingridient_item_img3}`}></div>
            </div>
            <p className={`${styles.ingridient_item_description}`}>
              Соус традиционный галактический
            </p>
            <p className={`${styles.ingridient_item_count} ml-4 mr-2`}>
              1 x 30
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <div className={`${styles.order_compound_item_wrapper} mb-4`}>
            <div className={`${styles.ingridient_item_container} mr-4`}>
              <div className={`${styles.ingridient_item_img4} `}></div>
            </div>
            <p className={`${styles.ingridient_item_description}`}>
              Плоды фалленианского дерева
            </p>
            <p className={`${styles.ingridient_item_count} ml-4 mr-2`}>
              1 x 80
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <div className={`${styles.order_compound_item_wrapper} mb-4`}>
            <div className={`${styles.ingridient_item_container} mr-4`}>
              <div className={`${styles.ingridient_item_img4} `}></div>
            </div>
            <p className={`${styles.ingridient_item_description}`}>
              Плоды фалленианского дерева
            </p>
            <p className={`${styles.ingridient_item_count} ml-4 mr-2`}>
              1 x 80
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <div className={`${styles.order_compound_item_wrapper} mb-4`}>
            <div className={`${styles.ingridient_item_container} mr-4`}>
              <div className={`${styles.ingridient_item_img4} `}></div>
            </div>
            <p className={`${styles.ingridient_item_description}`}>
              Плоды фалленианского дерева
            </p>
            <p className={`${styles.ingridient_item_count} ml-4 mr-2`}>
              1 x 80
            </p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={`${styles.summary_price_wrapper}`}>
          {' '}
          <p className={`${styles.date_time}`}>Вчера, 13:50 i-GMT+3</p>
          <div className={`${styles.summary_price_block}`}>
            <p className={`${styles.price} mr-2`}>510</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  )
}
