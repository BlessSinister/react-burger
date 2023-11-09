import {
  addIngridientsList,
  forgotPass,
  loginSystem,
  orderInfoGetter,
  orderLentStateFn,
  profileOrderLentStateFn,
  registerAccount,
  resetPass,
  resetProfileInitialState,
  setMainProfileInitialState,
  totalOrderFn,
} from './reducer'
import { BASE_URL, url } from '../utils/api'
import { Dispatch } from 'redux'

const checkResponse = (response: any): Promise<any> => {
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

export const fetchWithRefresh = async (
  url: string,
  options: {
    method?: string
    headers: {
      'Content-Type'?: string
      authorization?: string
      Accept?: string
    }
    body?: string
  }
) => {
  try {
    const res = await fetch(url, options)

    return await checkResponse(res)
  } catch (err) {
    if (err === 'Ошибка 403') {
      const refreshData = await refreshToken() //обновляем токен
      if (!refreshData.success) {
        return Promise.reject(refreshData)
      }
      localStorage.setItem('refreshToken', refreshData.refreshToken)
      localStorage.setItem('accessToken', refreshData.accessToken)

      options.headers.authorization = refreshData.accessToken
      const res = await fetch(url, options) //повторяем запрос
      return await checkResponse(res)
    } else {
      return Promise.reject(err)
    }
  }
}
// ======================================================

export const getBurgerIngridientList = () => async (dispatch: Dispatch) => {
  try {
    const response = await fetch(url)
    const data = await checkResponse(response)
    dispatch(addIngridientsList(data.data))
  } catch (err) {
    console.log(err)
  }
}

export const registrUserFn =
  (email: string, password: string, name: string) =>
  async (dispatch: Dispatch) => {
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

      dispatch(registerAccount(data.success))
      dispatch(setMainProfileInitialState({ email, password, name }))
      dispatch(resetProfileInitialState({ email, password, name }))
    } catch (err) {
      console.log(err)
    }
  }

export const checkFn = () => async (dispatch: Dispatch) => {
  if (localStorage.getItem('accessToken')) {
    dispatch(loginSystem(true))
  }
  let options = {
      method: 'GET',
      headers: {
        Accept: 'application/json' as string,
        'Content-Type': 'application/json' as string,
        authorization: localStorage.getItem('accessToken') as string,
      },
    },
    url = `${BASE_URL}auth/user`
  if (localStorage.getItem('accessToken')) {
    try {
      const response = await fetch(url, options)

      const data = await checkResponse(response)

      const name = data.user.name
      const email = data.user.email
      const password = data.user.password || 'qwerty'

      dispatch(setMainProfileInitialState({ email, password, name }))
    } catch (err) {
      fetchWithRefresh(url, options)
    }
  }
}

export const loginUserFn =
  (email: string, password: string) => async (dispatch: Dispatch) => {
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

      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
      dispatch(loginSystem(data.success))
    } catch (err) {
      fetchWithRefresh(url, options)
    }
    try {
      const response = await fetch(`${BASE_URL}auth/user`, {
        method: 'GET',

        headers: {
          authorization: localStorage.getItem('accessToken') as string,
          'Content-Type': 'application/json',
        },
      })

      const data = await checkResponse(response)

      const name = data.user.name

      dispatch(setMainProfileInitialState({ email, password, name }))
    } catch (err) {
      fetchWithRefresh(url, options)
    }
    if (localStorage.getItem('accessToken')) {
      dispatch(loginSystem(true))
    }
  }

export const logoutUserFn = () => async (dispatch: Dispatch) => {
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
    fetchWithRefresh(url, options)
  }
}

export const forgotPassFn = (email: string) => async (dispatch: Dispatch) => {
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

    dispatch(forgotPass(data.success))
  } catch (err) {
    console.log(err)
  }
}

export const resetPassFn =
  (password: string, token: string) => async (dispatch: Dispatch) => {
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

      dispatch(resetPass(data.success))
    } catch (err) {
      fetchWithRefresh(url, options)
    }
  }

export const setProfileInfo =
  (name: string, password: string, email: string) =>
  async (dispatch: Dispatch) => {
    let options = {
        method: 'PATCH' as string,
        headers: {
          authorization: localStorage.getItem('accessToken') as string,
          'Content-Type': 'application/json' as string,
        },
        body: JSON.stringify({
          name: name,
        }),
      },
      url = `${BASE_URL}auth/user`
    try {
      const response = await fetch(url, options)

      const data = await checkResponse(response)

      dispatch(setMainProfileInitialState({ name, password, email }))
    } catch (err) {
      fetchWithRefresh(url, options)
    }
  }
// ======================================================================== websocket

// export const getOrderLentInfo = () => async (dispatch: Dispatch) => {
//   // try {
//   //   const response = new WebSocket('wss://norma.nomoreparties.space/orders/all')
//   //   response.onmessage = (event) => {
//   //     dispatch(orderLentStateFn(JSON.parse(event.data).orders))
//   //     dispatch(totalOrderFn(JSON.parse(event.data)))
//   //   }
//   // } catch (err) {
//   //   console.log(err)
//   // }
// }

// export const getProfileOrderLentInfo = () => async (dispatch: Dispatch) => {
//   // try {
//   //   if (localStorage.getItem('accessToken') !== null) {
//   //     // //@ts-ignore
//   //     // let x = localStorage.getItem('accessToken').split('Bearer ')[1] as string
//   //     let x = localStorage.getItem('accessToken') as string
//   //     x = x.split('Bearer ')[1]
//   //     const response = new WebSocket(
//   //       `wss://norma.nomoreparties.space/orders?token=${x}`
//   //     )
//   //     response.onmessage = (event) => {
//   //       dispatch(profileOrderLentStateFn(JSON.parse(event.data)))
//   //     }
//   //   }
//   // } catch (err) {
//   //   console.log(err)
//   // }
// }
//Посмотреть асертс
export const getOrderInfo =
  (id: string[]) =>
  async (dispatch: Dispatch): Promise<any> => {
    try {
      const response = await fetch(`${BASE_URL}orders`, {
        method: 'post',
        headers: {
          Accept: 'application/json' as string,
          'Content-Type': 'application/json' as string,
          authorization: localStorage.getItem('accessToken') as string,
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
