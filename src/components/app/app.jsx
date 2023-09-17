import app_style from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useDispatch } from 'react-redux'
import { modalFlag, modalOrderFlag } from '../../services/reducer'

export default function App() {
  const dispatch = useDispatch()
  const onCloseModal = () => {
    dispatch(modalOrderFlag(false))
    dispatch(modalFlag(false))
  }
  return (
    <>
      <header className={app_style.header}>
        <AppHeader />
      </header>
      <main>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients onCloseModal={onCloseModal} />
          <BurgerConstructor onCloseModal={onCloseModal} />
        </DndProvider>
      </main>
    </>
  )
}
