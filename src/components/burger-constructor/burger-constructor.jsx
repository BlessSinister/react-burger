import const_style from './burger-constructor.module.css'
import BurgConstItems from '../burger-constructor-items/burg-const-items'
import OrderInfo from '../order-info/order-info'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getConstructorList } from '../../services/actions'
import Modal from '../modal/modal'
import OrderDetails from '../order-detailse/order-details'

export default function BurgerConstructor({ orderNumber }) {
  const data = useSelector((state) => state.ingridietnConstructor)
  const modal = useSelector((state) => state.modalOrderFlag)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getConstructorList)
  }, [])
  const data1 = []

  if (data.length > 0) {
    for (let i = 1; i < 8; i++) {
      data1.push(data[i])
      if (id.length < 8) {
        id.push(data[i]._id)
      }
    }
  } else {
    return
  }
  console.log(id)
  return (
    <section className={`${const_style.wrapper} mt-25`}>
      <BurgConstItems data={data} data1={data1} />
      <OrderInfo id={id} />
      {modal && (
        <Modal modal={modal}>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}
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
export const id = []
