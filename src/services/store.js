import { configureStore } from '@reduxjs/toolkit'
import {
  burgerIngridientsReducer,
  modalIngridientsReducer,
  modalOrderFlagReducer,
  modalingFlagReducer,
} from './reducer'

export const store = configureStore({
  reducer: {
    burgerIngridients: burgerIngridientsReducer.reducer,
    ingridietnConstructor: burgerIngridientsReducer.reducer,
    currentIngridient: modalIngridientsReducer.reducer,
    modalIngridientFlag: modalingFlagReducer.reducer,
    modalOrderFlag: modalOrderFlagReducer.reducer,
  },
  devTools: true,
  middleware: (defaultMiddleWare) => defaultMiddleWare().concat(),
  preloadedState: {
    burgerIngridients: [],
    ingridietnConstructor: [],
    currentIngridient: { id: 1, data: [] },
    order: {},
    modalIngridientFlag: false,
    modalOrderFlag: false,
  },
})
