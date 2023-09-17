import {
  addBurgerConstructorList,
  addIngridientsList,
  orderInfoGetter,
} from './reducer'
import { url } from '../utils/api'

const checkResponse = (response) => {
  if (response.ok) {
    return true
  } else {
    return false
  }
}
export const getBurgerIngridientList = () => async (dispatch) => {
  try {
    const response = await fetch(url)
    if (checkResponse(response)) {
      const data = await response.json()
      dispatch(addIngridientsList(data.data))
    } else {
      throw new Error('error check order')
    }
  } catch (err) {
    console.log(err)
  }
}

export const getConstructorList = () => async (dispatch) => {
  try {
    const response = await fetch(url)
    if (checkResponse(response)) {
      const data = await response.json()
      dispatch(addBurgerConstructorList(data.data))
    } else {
      throw new Error('error check order')
    }
  } catch (err) {
    console.log(err)
  }
}

export const getOrderInfo = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      'https://norma.nomoreparties.space/api/orders',
      {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ingredients: id,
        }),
      }
    )
    if (response.ok) {
      const data = await response.json()
      dispatch(orderInfoGetter(data.order.number))
    }
  } catch (err) {
    console.log(err)
  }
}
