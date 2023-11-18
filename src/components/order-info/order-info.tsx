import style from '../order-info/style.module.css'

import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'

import { modalOrderFlag } from '../../services/reducer'
import { getOrderInfo } from '../../services/actions'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'
import { Idata } from '../../utils/data'

export default function OrderInfo() {
  const dispatch = useAppDispatch()

  const authCheckerOrder = useAppSelector((state) => state.authUser)
  const navigate = useNavigate()

  const orderButonOn = useAppSelector((state) => state.dropTargetElem)

  const dropList = useAppSelector((state) => state.dropTargetElem)

  const bunPrice =
    useAppSelector((state) =>
      state.bunState.length ? state.bunState[0].price : 0
    ) * 2
  const bunId = useAppSelector((state) => state.bunState)

  const id: string[] = dropList.map((item: Idata) => item._id)
  if (bunId.length !== 0) {
    id.push(bunId[0]._id)
    id.unshift(bunId[0]._id)
  }

  let sumPrice =
    dropList.map((item: Idata) => item.price).reduce((a, b) => a + b, 0) +
    bunPrice

  return (
    <div className={style.wrapper}>
      <div className={`${style.decor_wrapper_price} mr-10`}>
        <p className={`ml-2 text text_type_main-large ${style.p}`}>
          {sumPrice}
        </p>
        <CurrencyIcon type="primary" />
      </div>
      <div
        onClick={() =>
          orderButonOn.length && authCheckerOrder
            ? dispatch(modalOrderFlag(true))
            : navigate('/login')
        }
      >
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() =>
            orderButonOn.length && authCheckerOrder
              ? dispatch(getOrderInfo(id))
              : null
          }
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}
