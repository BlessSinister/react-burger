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
