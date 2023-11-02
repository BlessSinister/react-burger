import { configureStore } from '@reduxjs/toolkit'
import {
  bunInfo,
  burgerConstructorReducer,
  burgerIngridientsReducer,
  dropTargetReducer,
  forgotPasswordReducer,
  getCounterReducer,
  keyGenerateBunReducer,
  keyGenerateIngridientsReducer,
  loginReducer,
  mainProfileInitialStateReducer,
  modalIngridientRefresh,
  modalIngridientsReducer,
  modalOrderFlagReducer,
  modalingFlagOrderLentReducer,
  modalingFlagProfileOrderLentReducer,
  modalingFlagReducer,
  orderConstructorInfo,
  profileInitialStateReducer,
  registerAccountReducer,
  resetPasswordReducer,
} from './reducer'

export const store = configureStore({
  reducer: {
    burgerIngridients: burgerIngridientsReducer.reducer,
    ingridietnConstructor: burgerConstructorReducer.reducer,
    currentIngridient: modalIngridientsReducer.reducer,
    modalIngridientFlag: modalingFlagReducer.reducer,
    modalOrderFlag: modalOrderFlagReducer.reducer,
    order: orderConstructorInfo.reducer,
    dropTargetElem: dropTargetReducer.reducer,
    bunState: bunInfo.reducer,
    counterState: getCounterReducer.reducer,
    keyIngridientsGenerate: keyGenerateIngridientsReducer.reducer,
    keyBunGenerate: keyGenerateBunReducer.reducer,
    registerAcc: registerAccountReducer.reducer,
    forgotPass: forgotPasswordReducer.reducer,
    authUser: loginReducer.reducer,
    resetPass: resetPasswordReducer.reducer,
    initialProfileInfo: profileInitialStateReducer.reducer,
    mainProfileInfo: mainProfileInitialStateReducer.reducer,
    inst: modalIngridientRefresh.reducer,
    modalOrderLentFlag: modalingFlagOrderLentReducer.reducer,
    modalProfileOrderLentFlag: modalingFlagProfileOrderLentReducer.reducer,
  },

  devTools: true,
  //@ts-ignore
  middleware: (defaultMiddleWare) => defaultMiddleWare(),
  preloadedState: {
    burgerIngridients: [],
    ingridietnConstructor: [],
    //@ts-ignore
    currentIngridient: { data: [] },
    modalIngridientFlag: false,
    modalOrderFlag: false,
    order: 'Wait order number',
    dropTargetElem: [],
    counterState: [],
    bunState: [],
    //@ts-ignore
    inst: JSON.parse(localStorage.getItem('Ing')),
    keyIngridientsGenerate: [],
    keyBunGenerate: [],
    registerAcc: false,
    forgotPass: false,
    authUser: false,
    resetPass: false,
    initialProfileInfo: {
      name: 'Igor',
      email: 'ig.mar@yandex.ru',
      password: 'qwerty',
    },
    mainProfileInfo: [
      {
        name: '',
        email: '',
        password: '',
      },
    ],
    modalOrderLentFlag: false,
    modalProfileOrderLentFlag: false,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
