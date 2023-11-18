import { configureStore } from '@reduxjs/toolkit'
import {
  bunInfo,
  burgerConstructorReducer,
  burgerIngridientsReducer,
  dropTargetReducer,
  getCounterReducer,
  keyGenerateBunReducer,
  keyGenerateIngridientsReducer,
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
    keyIngridientsGenerate: keyGenerateIngridientsReducer.reducer,
    keyBunGenerate: keyGenerateBunReducer.reducer,
  },

  devTools: true,
  middleware: (defaultMiddleWare) => defaultMiddleWare(),
  preloadedState: {
    burgerIngridients: [],
    ingridietnConstructor: [],
    currentIngridient: { id: 1, data: [] },
    modalIngridientFlag: false,
    modalOrderFlag: false,
    order: 'Add Ingridients',
    dropTargetElem: [],
    counterState: [],
    bunState: [],
    keyIngridientsGenerate: [],
    keyBunGenerate: [],
  },
})
