import style from '../order-info/style.module.css'
import propTypes from '../../utils/props-types'
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { modalOrderFlag } from '../../services/reducer'
import { getOrderInfo } from '../../services/actions'
import { useNavigate } from 'react-router-dom'

export default function OrderInfo() {
  const dispatch = useDispatch()
  //@ts-ignore
  const authCheckerOrder = useSelector((state) => state.authUser)
  const navigate = useNavigate()
  //@ts-ignore
  const orderButonOn = useSelector((state) => state.dropTargetElem)
  //@ts-ignore
  const dropList = useSelector((state) => state.dropTargetElem)
  //@ts-ignore
  const bunPrice =
    useSelector((state: any) =>
      state.bunState.length ? state.bunState[0].price : 0
    ) * 2
  //@ts-ignore
  const id: string[] = dropList.map((item: object[]) => item._id)
  console.log(id)

  let sumPrice =
    //@ts-ignore
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
              ? //@ts-ignore
                dispatch(getOrderInfo(id))
              : null
          }
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}
propTypes(OrderInfo)
