import style from '../order-info/style.module.css'
import propTypes from '../../utils/props-types'
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { modalOrderFlag, orderInfoGetter } from '../../services/reducer'

export default function OrderInfo() {
  const dispatch = useDispatch()
  const id = useSelector((state) => state.ingridietnConstructor)
  let sumPrice = id.map((item) => item.price).reduce((a, b) => a + b, 0)
  const getOrderInfo = async (dispatch) => {
    fetch('https://norma.nomoreparties.space/api/orders', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients: id,
      }),
    })
      .then((res) => res.json())
      .then((res) => dispatch(orderInfoGetter(res.order.number)))
  }

  return (
    <div className={style.wrapper}>
      <div className={`${style.decor_wrapper_price} mr-10`}>
        <p className={`ml-2 text text_type_main-large ${style.p}`}>
          {sumPrice}
        </p>
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
