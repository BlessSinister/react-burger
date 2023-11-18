import type { Middleware, MiddlewareAPI } from 'redux'

import type { AppDispatch, RootState } from '../store'
import {
  getConnectInfo,
  getConnectInfoProfile,
  orderLentStateFn,
  profileOrderLentStateFn,
  totalOrderFn,
} from '../reducer'

export const socketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null

    return (next) => (action) => {
      const { dispatch } = store
      const { type, payload } = action
      if (window.location.pathname === '/feed') {
        if (
          type === 'orderLentConnect/getConnectInfo' &&
          store.getState().wsConnectInfo === false
        ) {
          // объект класса WebSocket
          socket = new WebSocket('wss://norma.nomoreparties.space/orders/all')
        }

        if (socket) {
          socket.onmessage = (event: MessageEvent) => {
            dispatch(orderLentStateFn(JSON.parse(event.data).orders))
            dispatch(totalOrderFn(JSON.parse(event.data)))
          }

          // функция, которая вызывается при закрытии соединения
          socket.onopen = (event: Event) => {
            console.log('Соединение установлено')
          }

          socket.onclose = (event: CloseEvent) => {
            dispatch(getConnectInfo(false))
            if (event.wasClean) {
              console.log('Соединение закрыто корректно')
              console.log(`Код закрытия - ${event.code}`)
              console.log(`Причина закрытия - ${event.reason}`)
            } else {
              console.log(`Соединение закрыто с кодом -  ${event.code}`)
            }
          }
          socket.onerror = (event: Event) => {
            console.log(`Ошибка`)
          }
        }
      }
      if (window.location.pathname === '/profile/orders') {
        if (store.getState().wsConnectProfileLent === false) {
          let x = localStorage.getItem('accessToken') as string
          x = x.split('Bearer ')[1]
          socket = new WebSocket(
            `wss://norma.nomoreparties.space/orders?token=${x}`
          )
        }

        if (socket) {
          socket.onmessage = (event) => {
            dispatch(profileOrderLentStateFn(JSON.parse(event.data)))
          }

          socket.onopen = (event) => {
            console.log('Соединение', event)
          }

          socket.onclose = (event: CloseEvent) => {
            dispatch(getConnectInfoProfile(false))
            if (event.wasClean) {
              console.log('Соединение закрыто корректно')
              console.log(`Код закрытия - ${event.code}`)
              console.log(`Причина закрытия - ${event.reason}`)
            } else {
              console.log(`Соединение закрыто с кодом -  ${event.code}`)
            }
          }
          socket.onerror = (event) => {
            console.log('Ошибка')
          }
        }
      }
      next(action)
    }
  }) as Middleware
}
