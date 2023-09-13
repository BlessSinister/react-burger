import { createSlice } from '@reduxjs/toolkit'

export const burgerIngridientsReducer = createSlice({
  name: 'burgerIngReducer',
  initialState: [],
  reducers: {
    addIngridientsList: {
      reducer: (state, action) => action.payload,
    },
    payload: [],
  },
})

export const { addIngridientsList } = burgerIngridientsReducer.actions

export const burgerConstructorReducer = createSlice({
  name: 'burgerconstructor',
  initialState: [],
  reducers: {
    addBurgerConstructorList: {
      reducer: (state, action) => action.payload,
    },
    payload: [],
  },
})

export const { addBurgerConstructorList } = burgerConstructorReducer.actions

export const modalIngridientsReducer = createSlice({
  name: 'item',
  initialState: { id: 1, data: [] },
  reducers: {
    modalChanger: {
      reducer: (state, action) => {
        return action.payload.data.filter(
          (item) => item._id === action.payload.id
        )
      },
    },
  },
})
export const { modalChanger } = modalIngridientsReducer.actions

export const modalingFlagReducer = createSlice({
  name: 'modaling',
  initialState: false,
  reducers: {
    modalFlag: {
      reducer: (state, action) => action.payload,
    },
  },
})
export const { modalFlag } = modalingFlagReducer.actions

export const modalOrderFlagReducer = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    modalOrderFlag: {
      reducer: (state, action) => action.payload,
    },
  },
})
export const { modalOrderFlag } = modalOrderFlagReducer.actions

export const orderConstructorInfo = createSlice({
  name: 'orderInfo',
  initialState: 12,
  reducers: {
    orderInfoGetter: {
      reducer: (state, action) => action.payload,
    },
  },
})
export const { orderInfoGetter } = orderConstructorInfo.actions
