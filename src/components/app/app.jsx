import app_style from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { useEffect, useState } from 'react'
import ModalOverlay from '../modal-overlay/modal-overlay'
import { checkResponse, url } from '../../utils/api'

export default function App() {
  const [state, setState] = useState({})
  const [modal, setModal] = useState(false)
  const [modalIng, setModalIng] = useState(false)
  const [idElem, setIdElem] = useState('')
  const modalFn = () => {
    setModal(true)
  }
  const modalIngFn = (id) => {
    setIdElem(id)
    setModalIng(true)
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
        <ModalOverlay
          modal={modal}
          setModal={setModal}
          modalIng={modalIng}
          setModalIng={setModalIng}
          idElem={idElem}
          data={state.data}
        />
      </main>
    </>
  )
}
