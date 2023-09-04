import const_style from './burger-constructor.module.css'
import BurgConstItems from '../burger-constructor-items/burg-const-items'
import OrderInfo from '../order-info/order-info'
import PropTypes from 'prop-types'
import { CustomContext } from '../context/context'
import { useContext } from 'react'
import Modal from '../modal/modal'
import OrderDetails from '../order-detailse/order-details'
export default function BurgerConstructor({ data, orderNumber }) {
  const { modal } = useContext(CustomContext)
  return (
    <section className={`${const_style.wrapper} mt-25`}>
      <BurgConstItems data={data} />
      <OrderInfo />
      <Modal>{modal && <OrderDetails orderNumber={orderNumber} />}</Modal>
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
  orderNumber: PropTypes.string,
}
