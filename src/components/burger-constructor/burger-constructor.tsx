import const_style from './burger-constructor.module.css'
import BurgConstItems from '../burger-constructor-items/burg-const-items'
import OrderInfo from '../order-info/order-info'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../modal/modal'
import OrderDetails from '../order-detailse/order-details'
import {
  modalFlag,
  modalOrderFlag,
  orderInfoGetter,
} from '../../services/reducer'

export default function BurgerConstructor() {
  //@ts-ignore
  const modal = useSelector((state) => state.modalOrderFlag)
  const dispatch = useDispatch()
  const onCloseModal = () => {
    dispatch(modalOrderFlag(false))
    dispatch(modalFlag(false))
    dispatch(orderInfoGetter('Wait order number'))
  }

  return (
    <section className={`${const_style.wrapper} mt-25`}>
      <BurgConstItems />
      <OrderInfo />

      <Modal modal={modal} onCloseModal={onCloseModal}>
        {modal && <OrderDetails />}
      </Modal>
    </section>
  )
}
