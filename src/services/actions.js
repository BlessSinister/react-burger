import {
  addIngridientsList,
  forgotPass,
  orderInfoGetter,
  resetPass,
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

export const forgotPassFn = (email) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}password-reset`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: '',
      }),
    })

    const data = await checkResponse(response)

    dispatch(forgotPass(data.success))
  } catch (err) {
    console.log(err)
  }
}

export const registrUserFn = (email, password, name) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charger=utf-8',
      },
      body: JSON.stringify({
        email: 'test-data@yandex.ru',
        password: 'password',
        name: 'Username',
      }),
    })
    const data = await checkResponse(response)

    // dispatch(resettPass(data.success))
  } catch (err) {
    console.log(err)
  }
}
//Почему то сервер отвечает ошибкой 403
export const resetPassFn = (email) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}password-reset/reset`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: '',
        token: '',
      }),
    })

    const data = await checkResponse(response)
    console.log(data)
    // dispatch(resettPass(data.success))
  } catch (err) {
    console.log(err)
  }
}
//Нужно будет дописать редуссер и стор к этой функции, в настоящий момент функция просто висит на кнопке
