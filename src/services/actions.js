import { addBurgerConstructorList, addIngridientsList } from './reducer'
import { url } from '../utils/api'

export const getBurgerIngridientList = async (dispatch) => {
  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      dispatch(addIngridientsList(data.data))
    }
  } catch (err) {
    console.log(err)
  }
}

export const getConstructorList = async (dispatch) => {
  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      dispatch(addBurgerConstructorList(data.data))
    }
  } catch (err) {
    console.log(err)
  }
}