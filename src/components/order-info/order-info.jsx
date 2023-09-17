import style from '../order-info/style.module.css'
import propTypes from '../../utils/props-types'
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { modalOrderFlag } from '../../services/reducer'
import { getOrderInfo } from '../../services/actions'

export default function OrderInfo() {
  const dispatch = useDispatch()
  const orderButonOn = useSelector((state) => state.dropTargetElem)
  const dropList = useSelector((state) => state.dropTargetElem)
  const bunPrice = useSelector((state) => state.bunState[0].price) * 2
  const id = dropList.map((item) => item._id)
  let sumPrice =
    dropList.map((item) => item.price).reduce((a, b) => a + b, 0) + bunPrice

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
          orderButonOn.length ? dispatch(modalOrderFlag(true)) : null
        }
      >
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() =>
            orderButonOn.length ? dispatch(getOrderInfo(id)) : null
          }
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}
propTypes(OrderInfo)
