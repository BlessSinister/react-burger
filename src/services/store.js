import { configureStore } from '@reduxjs/toolkit'
import { burgerIngridientsReducer } from './reducer'

export const store = configureStore({
  reducer: {
    burgerIngridients: burgerIngridientsReducer.reducer,
  },
  devTools: true,
  middleware: (defaultMiddleWare) => defaultMiddleWare().concat(),
  preloadedState: {
    burgerIngridients: [],
    ingridietnConstructor: [],
    currentIngridient: {},
    order: {},
  },
})
