import const_style from './burger-constructor.module.css'
import BurgConstItems from '../burger-constructor-items/burg-const-items'
import { useState } from 'react'
import OrderInfo from '../order-info/order-info'
import propTypes from '../../utils/props-types'

export default function BurgerConstructor({ data, modalFn }) {
  const [price, setPrice] = useState(0)
  const hanldeSumm = (arr) => {
    return setPrice(arr.reduce((a, b) => a + b.price, 0) + 400)
  }

  return (
    <section className={`${const_style.wrapper} mt-25`}>
      <BurgConstItems data={data} summ={hanldeSumm} />
      <OrderInfo summPrice={price} modalFn={modalFn} />
    </section>
  )
}

propTypes(BurgerConstructor)
