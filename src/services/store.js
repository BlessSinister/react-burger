import { configureStore } from '@reduxjs/toolkit'
import {
  burgerIngridientsReducer,
  modalIngridientsReducer,
  modalOrderFlagReducer,
  modalingFlagReducer,
  orderConstructorInfo,
} from './reducer'

export const store = configureStore({
  reducer: {
    burgerIngridients: burgerIngridientsReducer.reducer,
    ingridietnConstructor: burgerIngridientsReducer.reducer,
    currentIngridient: modalIngridientsReducer.reducer,
    modalIngridientFlag: modalingFlagReducer.reducer,
    modalOrderFlag: modalOrderFlagReducer.reducer,
    order: orderConstructorInfo.reducer,
  },
  devTools: true,
  middleware: (defaultMiddleWare) => defaultMiddleWare().concat(),
  preloadedState: {
    burgerIngridients: [],
    ingridietnConstructor: [],
    currentIngridient: { id: 1, data: [] },
    modalIngridientFlag: false,
    modalOrderFlag: false,
    order: null,
  },
})
