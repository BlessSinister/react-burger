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
  modalIngridientsReducer,
  modalOrderFlagReducer,
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
  },

  devTools: true,
  middleware: (defaultMiddleWare) => defaultMiddleWare(),
  preloadedState: {
    burgerIngridients: [],
    ingridietnConstructor: [],
    currentIngridient: { id: 1, data: [] },
    modalIngridientFlag: false,
    modalOrderFlag: false,
    order: 'Wait order number',
    dropTargetElem: [],
    counterState: [],
    bunState: [],
    keyIngridientsGenerate: [],
    keyBunGenerate: [],
    registerAcc: false,
    forgotPass: false,
    authUser: false,
    resetPass: false,
    initialProfileInfo: {
      name: '',
      email: '',
      password: '',
    },
    mainProfileInfo: [
      {
        name: '',
        email: '',
        password: '',
      },
    ],
  },
})
