import {
  addIngridientsList,
  forgotPass,
  loginSystem,
  orderInfoGetter,
  registerAccount,
  resetPass,
  resetProfileInitialState,
  setMainProfileInitialState,
} from './reducer'
import { BASE_URL, url } from '../utils/api'
import { useSelector } from 'react-redux'

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
    dispatch(setMainProfileInitialState({ email, password, name }))
    dispatch(resetProfileInitialState({ email, password, name }))
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
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    dispatch(
      loginSystem({ success: data.success, email: email, password: password })
    )
  } catch (err) {
    console.log(err)
  }
  try {
    const response = await fetch(`${BASE_URL}auth/user`, {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('accessToken'),
        'Content-Type': 'application/json',
      },
    })

    const data = await checkResponse(response)
    console.log(data)
    const name = data.user.name

    dispatch(setMainProfileInitialState({ email, password, name }))
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
    dispatch(setMainProfileInitialState({}))
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
export const setProfileInfo = (name, password, email) => async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}auth/user`, {
      method: 'PATCH',
      headers: {
        authorization: localStorage.getItem('accessToken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
      }),
    })

    const data = await checkResponse(response)
    console.log(data)
    dispatch(setMainProfileInitialState({ name, password, email }))
  } catch (err) {
    console.log(err)
  }
}
