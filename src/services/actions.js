import {
  addBurgerConstructorList,
  addIngridientsList,
  orderInfoGetter,
} from './reducer'
import { url } from '../utils/api'
import { id } from '../components/burger-constructor/burger-constructor'

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

export const getOrderInfo = async (dispatch) => {
  fetch('https://norma.nomoreparties.space/api/orders', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ingredients: id,
    }),
  })
    .then((res) => res.json())
    .then((res) => dispatch(orderInfoGetter(res.order.number)))
}
