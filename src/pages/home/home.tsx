import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'
import BurgerConstructor from '../../components/burger-constructor/burger-constructor'
import { useEffect } from 'react'
import { modalFlag, modalOrderFlag } from '../../services/reducer'
import { useAppDispatch } from '../../services/redux-hooks'

export default function Home() {
  const dispatch = useAppDispatch()
  const onCloseModal = () => {
    dispatch(modalOrderFlag(false))
    dispatch(modalFlag(false))
    localStorage.removeItem('modalIng')
  }

  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients onCloseModal={onCloseModal} />

        <BurgerConstructor />
      </DndProvider>
    </main>
  )
}
