import {
  addIngridientsList,
  forgotPass,
  loginSystem,
  orderInfoGetter,
  registerAccount,
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

export const registrUserFn = (email, password, name) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charger=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
      }),
    })
    const data = await checkResponse(response)
    localStorage.setItem('accessToken', data.accessToken.split('Bearer ')[1])
    localStorage.setItem('refreshToken', data.refreshToken)
    console.log(data)
    dispatch(registerAccount(data.success))
  } catch (err) {
    console.log(err)
  }
}
export const loginUserFn = (email, password) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charger=utf-8',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
    const data = await checkResponse(response)
    console.log(email, password)
    localStorage.setItem('accessToken', data.accessToken.split('Bearer ')[1])
    localStorage.setItem('refreshToken', data.refreshToken)
    dispatch(
      loginSystem({ success: data.success, email: email, password: password })
    )
  } catch (err) {
    console.log(err)
  }
}
export const logoutUserFn = () => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}auth/logout`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken'),
      }),
    })

    const data = await checkResponse(response)
    console.log(data)
    dispatch(loginSystem(false))
  } catch (err) {
    console.log(err)
  }
}

export const forgotPassFn = (email) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}password-reset`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json; charger=utf-8',
      },
      body: JSON.stringify({
        email: email,
      }),
    })

    const data = await checkResponse(response)
    console.log(data)
    dispatch(forgotPass(data.success))
  } catch (err) {
    console.log(err)
  }
}

export const resetPassFn = (password, token) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}password-reset/reset`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        token: token,
      }),
    })

    const data = await checkResponse(response)
    console.log(data)
    dispatch(resetPass(data.success))
  } catch (err) {
    console.log(err)
  }
}
//Нужно будет дописать редуссер и стор к этой функции, в настоящий момент функция просто висит на кнопке
