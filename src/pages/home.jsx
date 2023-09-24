import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BurgerIngredients from '../components/burger-ingredients/burger-ingredients'
import BurgerConstructor from '../components/burger-constructor/burger-constructor'
import { useDispatch } from 'react-redux'
import { modalFlag, modalOrderFlag } from '../services/reducer'

export default function Home() {
  const dispatch = useDispatch()
  const onCloseModal = () => {
    dispatch(modalOrderFlag(false))
    dispatch(modalFlag(false))
  }

  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients onCloseModal={onCloseModal} />
        <BurgerConstructor onCloseModal={onCloseModal} />
      </DndProvider>
    </main>
  )
}
