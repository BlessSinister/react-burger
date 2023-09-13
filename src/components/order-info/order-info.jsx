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

  return (
    <div className={style.wrapper}>
      <div className={`${style.decor_wrapper_price} mr-10`}>
        <p className={`ml-2 text text_type_main-large ${style.p}`}>610</p>
        <CurrencyIcon type="primary" />
      </div>
      <div onClick={() => dispatch(modalOrderFlag(true))}>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => dispatch(getOrderInfo)}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  )
}
propTypes(OrderInfo)
