import app_style from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { useEffect, useState } from 'react'
import { checkResponse, url } from '../../utils/api'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import OrderDetails from '../order-detailse/order-details'
import { Context } from '../hooks/context'
export default function App() {
  const [state, setState] = useState({})
  const [orderNumber, setOrderNumber] = useState('034546')

  useEffect(() => {
    try {
      fetch(url)
        .then((res) => checkResponse(res))
        .then((data) => setState(data))
    } catch (e) {
      console.log(e)
    }
  }, [])

  return (
    <Context>
      <header className={app_style.header}>
        <AppHeader />
      </header>
      <main>
        <BurgerIngredients data={state.data} />
        <BurgerConstructor data={state.data} />

        <Modal>
          <OrderDetails orderNumber={orderNumber} />
          <IngredientDetails data={state.data} />
        </Modal>
      </main>
    </Context>
  )
}
