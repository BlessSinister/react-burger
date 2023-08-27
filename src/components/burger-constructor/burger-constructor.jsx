import const_style from './burger-constructor.module.css'
import BurgConstItems from '../burger-constructor-items/burg-const-items'
import PropTypes from 'prop-types'
import { useState } from 'react'
import OrderInfo from '../order-info/order-info'
export default function BurgerConstructor({ data }) {
  const [price, setPrice] = useState(0)
  const hanldeSumm = (arr) => {
    return setPrice(arr.reduce((a, b) => a + b.price, 0) + 400)
  }

  return (
    <section className={`${const_style.wrapper} mt-25`}>
      <BurgConstItems data={data} summ={hanldeSumm} />
      <OrderInfo summPrice={price} />
    </section>
  )
}

BurgerConstructor.propTypes = {
  _id: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
}
