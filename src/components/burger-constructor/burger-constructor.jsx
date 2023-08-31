import const_style from './burger-constructor.module.css'
import BurgConstItems from '../burger-constructor-items/burg-const-items'
import OrderInfo from '../order-info/order-info'
import PropTypes from 'prop-types'

export default function BurgerConstructor({ data }) {
  return (
    <section className={`${const_style.wrapper} mt-25`}>
      <BurgConstItems data={data} />
      <OrderInfo />
    </section>
  )
}
BurgerConstructor.propTypes = {
  _id: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  data: PropTypes.array,
}
