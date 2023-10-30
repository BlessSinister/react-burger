import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Idata } from '../components/ing-list/ingr-list'
export const burgerIngridientsReducer = createSlice({
  name: 'burgerIngReducer',
  initialState: [] as Idata[],
  reducers: {
    //@ts-ignore
    addIngridientsList: {
      reducer: (state, action: PayloadAction<Idata[]>) => {
        console.log(action.payload)
        return action.payload
      },
    },
    //@ts-ignore
    payload: [] as Idata[],
  },
})

export const { addIngridientsList } = burgerIngridientsReducer.actions

export const burgerConstructorReducer = createSlice({
  name: 'burgerconstructor',
  initialState: [],
  reducers: {
    //@ts-ignore
    addBurgerConstructorList: {
      reducer: (state, action) => {
        if (action.payload.length > 1) {
          return action.payload.slice(0, 8)
        }
      },
    },
    //@ts-ignore
    payload: [],
  },
})

export const { addBurgerConstructorList } = burgerConstructorReducer.actions

export const modalIngridientsReducer = createSlice({
  name: 'item',
  initialState: { id: 1, data: [] },
  reducers: {
    //@ts-ignore
    modalChanger: {
      reducer: (state, action) => {
        if (localStorage.getItem('targetElem')) {
          localStorage.removeItem('targetElem')
        }
        //@ts-ignore
        return action.payload.data.filter((item) => {
          localStorage.setItem('targetElem', action.payload.id)
          return item._id === action.payload.id
        })
      },
    },
  },
})
export const { modalChanger } = modalIngridientsReducer.actions

export const modalingFlagReducer = createSlice({
  name: 'modaling',
  initialState: false,
  reducers: {
    //@ts-ignore
    modalFlag: {
      reducer: (state, action: PayloadAction<boolean>) => {
        return action.payload
      },
    },
  },
})
export const { modalFlag } = modalingFlagReducer.actions

export const modalOrderFlagReducer = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    //@ts-ignore
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
    //@ts-ignore
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
    //@ts-ignore
    dropTargetSetter: {
      reducer: (state, action) => {
        state.push(
          //@ts-ignore
          ...action.payload.data.filter(
            //@ts-ignore
            (item) =>
              item._id === action.payload.id &&
              action.payload.id !== '643d69a5c3f7b9001cfa093c' &&
              action.payload.id !== '643d69a5c3f7b9001cfa093d'
          )
        )
      },
    },
    //@ts-ignore
    mixConstructorItems: {
      //@ts-ignore
      reducer: (state, action) => action.payload.map((item) => item),
    },
    //@ts-ignore
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
    //@ts-ignore
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
            //@ts-ignore
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
    //@ts-ignore
    checkFlag: {
      reducer: (state, action) => {
        //@ts-ignore
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
    //@ts-ignore
    setKeyIngrId: {
      reducer: (state, action) => {
        //@ts-ignore
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
    //@ts-ignore
    setKeyBunId: {
      reducer: (state, action) => {
        //@ts-ignore
        state.push(action.payload)
      },
    },
  },
})
export const { setKeyBunId } = keyGenerateBunReducer.actions

export const registerAccountReducer = createSlice({
  name: 'registerAcc',
  initialState: {},
  reducers: {
    //@ts-ignore
    registerAccount: {
      reducer: (state, action) => {
        return action.payload
      },
    },
  },
})
export const { registerAccount } = registerAccountReducer.actions

export const forgotPasswordReducer = createSlice({
  name: 'forgotPass',
  initialState: false,
  reducers: {
    //@ts-ignore
    forgotPass: {
      reducer: (state, action) => {
        return action.payload
      },
    },
  },
})
export const { forgotPass } = forgotPasswordReducer.actions

export const resetPasswordReducer = createSlice({
  name: 'forgotPass',
  initialState: false,
  reducers: {
    //@ts-ignore
    resetPass: {
      reducer: (state, action) => {
        return action.payload
      },
    },
  },
})
export const { resetPass } = resetPasswordReducer.actions

export const loginReducer = createSlice({
  name: 'login',
  initialState: [],
  reducers: {
    //@ts-ignore
    loginSystem: {
      reducer: (state, action) => {
        return action.payload
      },
    },
  },
})
export const { loginSystem } = loginReducer.actions

export const mainProfileInitialStateReducer = createSlice({
  name: 'mainProfileInitialState',
  initialState: [{ name: '', email: '', password: '' }],
  reducers: {
    //@ts-ignore
    setMainProfileInitialState: {
      reducer: (state, action) => {
        state[0] = action.payload
      },
    },
  },
})
export const { setMainProfileInitialState } =
  mainProfileInitialStateReducer.actions

export const profileInitialStateReducer = createSlice({
  name: 'profileInitialState',
  initialState: [],
  reducers: {
    //@ts-ignore
    resetProfileInitialState: {
      reducer: (state, action) => {
        return action.payload
      },
    },
  },
})
export const { resetProfileInitialState } = profileInitialStateReducer.actions

export const modalIngridientRefresh = createSlice({
  name: 'refreshModal',
  initialState: [],
  reducers: {
    //@ts-ignore
    refreshModalState: {
      reducer: (state, action) => {
        return action.payload
      },
    },
  },
})
export const { refreshModalState } = modalIngridientRefresh.actions
