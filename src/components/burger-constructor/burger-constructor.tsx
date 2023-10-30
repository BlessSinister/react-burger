import const_style from './burger-constructor.module.css'
import BurgConstItems from '../burger-constructor-items/burg-const-items'
import OrderInfo from '../order-info/order-info'
import Modal from '../modal/modal'
import OrderDetails from '../order-detailse/order-details'
import {
  modalFlag,
  modalOrderFlag,
  orderInfoGetter,
} from '../../services/reducer'
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'

export default function BurgerConstructor() {
  const modal = useAppSelector((state) => state.modalOrderFlag)
  const dispatch = useAppDispatch()
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
