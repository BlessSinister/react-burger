import const_style from './burger-constructor.module.css'
import BurgConstItems from '../burger-constructor-items/burg-const-items'
import OrderInfo from '../order-info/order-info'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getConstructorList } from '../../services/actions'
import Modal from '../modal/modal'
import OrderDetails from '../order-detailse/order-details'

export default function BurgerConstructor() {
  const modal = useSelector((state) => state.modalOrderFlag)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getConstructorList)
  }, [])

  let counter = 0
  return (
    <section className={`${const_style.wrapper} mt-25`}>
      <BurgConstItems counter={counter} />
      <OrderInfo />
      {modal && (
        <Modal modal={modal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  )
}
