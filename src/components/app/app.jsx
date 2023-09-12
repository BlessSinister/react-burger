import app_style from './app.module.css'
import AppHeader from '../app-header/app-header'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { useContext, useEffect, useState } from 'react'
import { getData } from '../../utils/api'
import { CustomContext } from '../context/context'
import { useSelector, useDispatch } from 'react-redux'
import { getBurgerIngridientList } from '../../services/actions'

export default function App() {
  const burgerIngridientList = useSelector((state) => state.burgerIngridients)
  const dispatch = useDispatch()

  const [orderNumber] = useState('034546')

  useEffect(() => {
    dispatch(getBurgerIngridientList)
  }, [])

  return (
    <>
      <header className={app_style.header}>
        <AppHeader />
      </header>
      <main>
        <BurgerIngredients data={burgerIngridientList} />
        {/* <BurgerConstructor data={state.data} orderNumber={orderNumber} /> */}
      </main>
    </>
  )
}
