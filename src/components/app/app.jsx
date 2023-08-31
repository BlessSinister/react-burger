import app_style from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { useContext, useEffect, useState } from 'react'
import { getData } from '../../utils/api'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import OrderDetails from '../order-detailse/order-details'
import { CustomContext } from '../context/context'

export default function App() {
  const { modal, setModal, modalIng, setModalIng, setState, state, arr } =
    useContext(CustomContext)

  const [orderNumber, setOrderNumber] = useState('034546')

  useEffect(() => {
    getData().then((data) => setState(data))
  }, [])

  return (
    <>
      <header className={app_style.header}>
        <AppHeader />
      </header>
      <main>
        <BurgerIngredients data={state.data} />
        <BurgerConstructor data={state.data} />

        <Modal>
          {modal && <OrderDetails orderNumber={orderNumber} />}
          {modalIng && <IngredientDetails data={arr} />}
        </Modal>
      </main>
    </>
  )
}
