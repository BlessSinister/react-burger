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
      reducer: (state, action) => {
        if (action.payload.length > 1) {
          return action.payload.slice(0, 8)
        }
      },
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
  initialState: 0,
  reducers: {
    orderInfoGetter: {
      reducer: (state, action) => action.payload,
    },
  },
})
export const { orderInfoGetter } = orderConstructorInfo.actions

export const dropTargetReducer = createSlice({
  name: 'dropTarget',
  initialState: [],
  reducers: {
    dropTargetSetter: {
      reducer: (state, action) => {
        state.push(
          ...action.payload.data.filter(
            (item) =>
              item._id === action.payload.id &&
              action.payload.id !== '643d69a5c3f7b9001cfa093c' &&
              action.payload.id !== '643d69a5c3f7b9001cfa093d'
          )
        )
      },
    },
    mixConstructorItems: {
      reducer: (state, action) => action.payload.map((item) => item),
    },
    deleteItems: {
      reducer: (state, action) =>
        state.filter((item, index) => index !== action.payload),
    },
  },
})
export const { dropTargetSetter, mixConstructorItems, deleteItems } =
  dropTargetReducer.actions

export const bunInfo = createSlice({
  name: 'bunInfo',
  initialState: [{}],
  reducers: {
    bunChanger: {
      reducer: (state, action) => {
        if (
          '643d69a5c3f7b9001cfa093c' === action.payload.id ||
          '643d69a5c3f7b9001cfa093d' === action.payload.id
        ) {
          state.shift()
        }

        state.push(
          ...action.payload.data.filter(
            (item) =>
              (item._id === '643d69a5c3f7b9001cfa093c' &&
                '643d69a5c3f7b9001cfa093c' === action.payload.id) ||
              (item._id === '643d69a5c3f7b9001cfa093d' &&
                '643d69a5c3f7b9001cfa093d' === action.payload.id)
          )
        )
      },
    },
  },
})
export const { bunChanger } = bunInfo.actions

export const getCounterReducer = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    checkFlag: {
      reducer: (state, action) => {
        state.push(action.payload.id)
      },
    },
  },
})
export const { checkFlag } = getCounterReducer.actions

export const keyGenerateIngridientsReducer = createSlice({
  name: 'keyIngridients',
  initialState: [],
  reducers: {
    setKeyIngrId: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
    },
  },
})
export const { setKeyIngrId } = keyGenerateIngridientsReducer.actions

export const keyGenerateBunReducer = createSlice({
  name: 'keyIngridients',
  initialState: [],
  reducers: {
    setKeyBunId: {
      reducer: (state, action) => {
        state.push(action.payload)
      },
    },
  },
})
export const { setKeyBunId } = keyGenerateBunReducer.actions

export const forgotPasswordReducer = createSlice({
  name: 'resetPass',
  initialState: [],
  reducers: {
    forgotPass: {
      reducer: (state, action) => {
        return action.payload
      },
    },
  },
})
export const { forgotPass } = forgotPasswordReducer.actions
