import const_style from './burger-constructor.module.css'
import BurgConstItems from '../burger-constructor-items/burg-const-items'
import OrderInfo from '../order-info/order-info'
import { burgerConstructorPropTypes } from '../../utils/props-types'

export default function BurgerConstructor({ data }) {
  return (
    <section className={`${const_style.wrapper} mt-25`}>
      <BurgConstItems data={data} />
      <OrderInfo />
    </section>
  )
}

burgerConstructorPropTypes(BurgerConstructor)
