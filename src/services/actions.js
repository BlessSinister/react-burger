import {
  addIngridientsList,
  modalFlag,
  modalOrderFlag,
  orderInfoGetter,
} from './reducer'
import { BASE_URL, url } from '../utils/api'

const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  }
  return Promise.reject(`Ошибка ${response.status}`)
}

export const getBurgerIngridientList = () => async (dispatch) => {
  try {
    const response = await fetch(url)
    const data = await checkResponse(response)
    dispatch(addIngridientsList(data.data))
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

    const data = await checkResponse(response)
    dispatch(orderInfoGetter(data.order.number))
  } catch (err) {
    console.log(err)
  }
}
