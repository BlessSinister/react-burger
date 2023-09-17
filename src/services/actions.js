import {
  addBurgerConstructorList,
  addIngridientsList,
  orderInfoGetter,
} from './reducer'
import { BASE_URL, url } from '../utils/api'

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
      return Promise.reject(`Ошибка ${response.status}`)
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
      return Promise.reject(`Ошибка ${response.status}`)
    }
  } catch (err) {
    console.log(err)
  }
}

export const getOrderInfo = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}orders`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredients: id,
      }),
    })
    if (checkResponse(response)) {
      const data = await response.json()
      dispatch(orderInfoGetter(data.order.number))
    } else {
      return Promise.reject(`Ошибка ${response.status}`)
    }
  } catch (err) {
    console.log(err)
  }
}
