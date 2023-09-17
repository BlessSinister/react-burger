import { configureStore } from '@reduxjs/toolkit'
import {
  bunInfo,
  burgerConstructorReducer,
  burgerIngridientsReducer,
  dropTargetReducer,
  getCounterReducer,
  modalIngridientsReducer,
  modalOrderFlagReducer,
  modalingFlagReducer,
  orderConstructorInfo,
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
  },

  devTools: true,
  middleware: (defaultMiddleWare) => defaultMiddleWare().concat(),
  preloadedState: {
    burgerIngridients: [],
    ingridietnConstructor: [],
    currentIngridient: { id: 1, data: [] },
    modalIngridientFlag: false,
    modalOrderFlag: false,
    order: 'Add Ingridients',
    dropTargetElem: [],
    counterState: [],
    bunState: [
      {
        calories: 420,
        carbohydrates: 53,
        fat: 24,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        name: 'Краторная булка N-200i',
        price: 1255,
        proteins: 80,
        type: 'bun',
        __v: 0,
        _id: '643d69a5c3f7b9001cfa093c',
      },
    ],
  },
})
