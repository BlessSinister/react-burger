import style from '../order-info/style.module.css'
import propTypes from '../../utils/props-types'
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import React, { useContext } from 'react'
import { CustomContext } from '../context/context'
export default function OrderInfo() {
  const { modalFn } = useContext(CustomContext)

  return (
    <div className={style.wrapper}>
      <div className={`${style.decor_wrapper_price} mr-10`}>
        <p className={`ml-2 text text_type_main-large ${style.p}`}>610</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={modalFn}>
        Оформить заказ
      </Button>
    </div>
  )
}
propTypes(OrderInfo)
