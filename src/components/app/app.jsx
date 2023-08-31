import app_style from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { useEffect, useState } from 'react'
import { checkResponse, url } from '../../utils/api'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
import OrderDetails from '../order-detailse/order-details'

export default function App() {
  const [state, setState] = useState({})
  const [modal, setModal] = useState(false)
  const [modalIng, setModalIng] = useState(false)
  const [idElem, setIdElem] = useState('')
  const modalFn = () => {
    setModal(!modal)
  }
  const modalIngFn = (id) => {
    setIdElem(id)
    setModalIng(!modalIng)
  }
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
    <>
      <header className={app_style.header}>
        <AppHeader />
      </header>
      <main>
        <BurgerIngredients data={state.data} modalIngFn={modalIngFn} />
        <BurgerConstructor data={state.data} modalFn={modalFn} />

        <Modal
          modal={modal}
          setModal={setModal}
          modalFn={modalFn}
          modalIngFn={modalIngFn}
          modalIng={modalIng}
          setModalIng={setModalIng}
          idElem={idElem}
          data={state.data}
        >
          <OrderDetails />
          <IngredientDetails
            modalIng={modalIng}
            setModalIng={setModalIng}
            data={state.data}
            idElem={idElem}
          />
        </Modal>
      </main>
    </>
  )
}
