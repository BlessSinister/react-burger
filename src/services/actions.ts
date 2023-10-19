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

const checkResponse = (response: any): Promise<any> => {
  console.log(response)
  if (response.ok) {
    return response.json()
  }
  return Promise.reject(`Ошибка ${response.status}`)
}

export const refreshToken = () => {
  return fetch(`${BASE_URL}auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  }).then(checkResponse)
}

//@ts-ignore
const fetchWithRefresh = async (err, url, options) => {
  if (err.message === 'jwt expired') {
    const refreshData = await refreshToken()
    if (!refreshData.success) {
      return Promise.reject(refreshData)
    }
    localStorage.setItem('refreshToken', refreshData.refreshToken)
    localStorage.setItem('accessToken', refreshData.accessToken)
    options.headers.authorization = refreshData.accessToken
    const res = await fetch(url, options)
    return await checkResponse(res)
  }
}
// ======================================================

//@ts-ignore
export const getBurgerIngridientList = () => async (dispatch) => {
  try {
    const response = await fetch(url)
    const data = await checkResponse(response)
    dispatch(addIngridientsList(data.data))
  } catch (err) {
    console.log(err)
  }
}
//@ts-ignore
export const getOrderInfo = (id: string) => async (dispatch) => {
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

//@ts-ignore
export const registrUserFn =
  (email: string, password: string, name: string) =>
  async (
    //@ts-ignore
    dispatch
  ) => {
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
//@ts-ignore
export const checkFn = () => async (dispatch) => {
  if (localStorage.getItem('accessToken')) {
    dispatch(loginSystem(true))
  }
  let options = {
      method: 'GET',
      headers: {
        authorization: localStorage.getItem('accessToken'),
        'Content-Type': 'application/json',
      },
    },
    url = `${BASE_URL}auth/user`
  try {
    //@ts-ignore
    const response = await fetch(url, options)

    const data = await checkResponse(response)

    const name = data.user.name
    const email = data.user.email
    const password = data.user.password || 'qwerty'

    dispatch(setMainProfileInitialState({ email, password, name }))
  } catch (err) {
    fetchWithRefresh(err, url, options)
  }
}

export const loginUserFn =
  (email: string, password: string) =>
  async (
    //@ts-ignore
    dispatch
  ) => {
    let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charger=utf-8',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      },
      url = `${BASE_URL}auth/login`
    try {
      const response = await fetch(url, options)
      const data = await checkResponse(response)
      console.log(email, password)
      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
      dispatch(loginSystem(data.success))
    } catch (err) {
      fetchWithRefresh(err, url, options)
    }
    try {
      const response = await fetch(`${BASE_URL}auth/user`, {
        method: 'GET',
        //@ts-ignore
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
      fetchWithRefresh(err, url, options)
    }
    if (localStorage.getItem('accessToken')) {
      dispatch(loginSystem(true))
    }
  }
//@ts-ignore
export const logoutUserFn = () => async (dispatch) => {
  let options = {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken'),
      }),
    },
    url = `${BASE_URL}auth/logout`
  try {
    const response = await fetch(url, options)

    const data = await checkResponse(response)
    console.log(data)
    dispatch(loginSystem(false))
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    dispatch(setMainProfileInitialState({}))
  } catch (err) {
    fetchWithRefresh(err, url, options)
  }
}

//@ts-ignore
export const forgotPassFn = (email: string) => async (dispatch) => {
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

//@ts-ignore
export const resetPassFn =
  (password: string, token: string) =>
  async (
    //@ts-ignore
    dispatch
  ) => {
    let options = {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          token: token,
        }),
      },
      url = `${BASE_URL}password-reset/reset`
    try {
      const response = await fetch(url, options)

      const data = await checkResponse(response)
      console.log(data)
      dispatch(resetPass(data.success))
    } catch (err) {
      fetchWithRefresh(err, url, options)
    }
  }

export const setProfileInfo =
  (name: string, password: string, email: string) =>
  async (
    //@ts-ignore
    dispatch
  ) => {
    let options = {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('accessToken'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
        }),
      },
      url = `${BASE_URL}auth/user`
    try {
      //@ts-ignore
      const response = await fetch(url, options)

      const data = await checkResponse(response)
      console.log(data)
      dispatch(setMainProfileInitialState({ name, password, email }))
    } catch (err) {
      fetchWithRefresh(err, url, options)
    }
  }
