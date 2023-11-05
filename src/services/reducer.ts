import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Idata } from '../components/ing-list/ingr-list'
import { IOrder, IOrderLentObj } from '../utils/data'
export const burgerIngridientsReducer = createSlice({
  name: 'burgerIngReducer',
  initialState: [] as Idata[],
  reducers: {
    addIngridientsList: (state, action: PayloadAction<Idata[]>) => {
      return action.payload
    },
  },
})

export const { addIngridientsList } = burgerIngridientsReducer.actions

export const burgerConstructorReducer = createSlice({
  name: 'burgerconstructor',
  initialState: [] as Idata[],
  reducers: {
    addBurgerConstructorList: (state, action: PayloadAction<Idata[]>) => {
      if (action.payload.length > 1) {
        console.log(action.payload.slice(0, 8))
        return action.payload.slice(0, 8)
      }
    },
  },
})

export const { addBurgerConstructorList } = burgerConstructorReducer.actions

// ==========================================================================
interface TcurrentItem {
  id: string
  data: Idata[]
}
export const modalIngridientsReducer = createSlice({
  name: 'item',
  initialState: [] as Idata[],
  reducers: {
    modalChanger: (state, action: PayloadAction<TcurrentItem>) => {
      if (localStorage.getItem('targetElem')) {
        localStorage.removeItem('targetElem')
      }
      console.log(action.payload)

      return action.payload.data.filter((item: Idata) => {
        localStorage.setItem('targetElem', action.payload.id)
        return item._id === action.payload.id
      })
    },
  },
})
export const { modalChanger } = modalIngridientsReducer.actions
// ==========================================================================

export const modalingFlagReducer = createSlice({
  name: 'modaling',
  initialState: false as boolean,
  reducers: {
    modalFlag: (state, action: PayloadAction<boolean>) => {
      return action.payload
    },
  },
})
export const { modalFlag } = modalingFlagReducer.actions

export const modalOrderFlagReducer = createSlice({
  name: 'modal',
  initialState: false as boolean,
  reducers: {
    modalOrderFlag: (state, action: PayloadAction<boolean>) => action.payload,
  },
})
export const { modalOrderFlag } = modalOrderFlagReducer.actions

export const orderConstructorInfo = createSlice({
  name: 'orderInfo',
  initialState: 0 as number | string,
  reducers: {
    orderInfoGetter: (state, action: PayloadAction<number | string>) =>
      action.payload,
  },
})
export const { orderInfoGetter } = orderConstructorInfo.actions

// ==========================================================================

export const dropTargetReducer = createSlice({
  name: 'dropTarget',
  initialState: [],
  reducers: {
    //@ts-ignore
    dropTargetSetter: {
      reducer: (state, action) => {
        console.log(action.payload)
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

// ==========================================================================

interface IbunInfo {
  id: string
  data: Idata[]
  dropElements: []
}
export const bunInfo = createSlice({
  name: 'bunInfo',
  initialState: [] as IbunInfo[],
  reducers: {
    bunChanger: (state, action) => {
      if (
        '643d69a5c3f7b9001cfa093c' === action.payload.id ||
        '643d69a5c3f7b9001cfa093d' === action.payload.id
      ) {
        state.shift()
      }
      console.log(action.payload)
      state.push(
        ...action.payload.data.filter(
          (item: Idata) =>
            (item._id === '643d69a5c3f7b9001cfa093c' &&
              '643d69a5c3f7b9001cfa093c' === action.payload.id) ||
            (item._id === '643d69a5c3f7b9001cfa093d' &&
              '643d69a5c3f7b9001cfa093d' === action.payload.id)
        )
      )
    },
  },
})
export const { bunChanger } = bunInfo.actions

// ==========================================================================

export const getCounterReducer = createSlice({
  name: 'counter',
  initialState: [] as string[],
  reducers: {
    checkFlag: (state, action: PayloadAction<IbunInfo>) => {
      state.push(action.payload.id)
    },
  },
})
export const { checkFlag } = getCounterReducer.actions

export const keyGenerateIngridientsReducer = createSlice({
  name: 'keyIngridients',
  initialState: [] as string[],
  reducers: {
    setKeyIngrId: (state, action: PayloadAction<string>) => {
      state.push(action.payload)
    },
  },
})
export const { setKeyIngrId } = keyGenerateIngridientsReducer.actions

export const keyGenerateBunReducer = createSlice({
  name: 'keyIngridients',
  initialState: [] as string[],
  reducers: {
    setKeyBunId: (state, action: PayloadAction<string>) => {
      state.push(action.payload)
    },
  },
})
export const { setKeyBunId } = keyGenerateBunReducer.actions

export const registerAccountReducer = createSlice({
  name: 'registerAcc',
  initialState: false as boolean,
  reducers: {
    registerAccount: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload)
      return action.payload
    },
  },
})
export const { registerAccount } = registerAccountReducer.actions

// ==========================================================================

export const forgotPasswordReducer = createSlice({
  name: 'forgotPass',
  initialState: false,
  reducers: {
    forgotPass: (state, action: PayloadAction<boolean>) => {
      return action.payload
    },
  },
})
export const { forgotPass } = forgotPasswordReducer.actions

export const resetPasswordReducer = createSlice({
  name: 'forgotPass',
  initialState: false,
  reducers: {
    resetPass: (state, action: PayloadAction<boolean>) => {
      return action.payload
    },
  },
})
export const { resetPass } = resetPasswordReducer.actions

export const loginReducer = createSlice({
  name: 'login',
  initialState: false as boolean,
  reducers: {
    loginSystem: (state, action: PayloadAction<boolean>) => {
      return action.payload
    },
  },
})
export const { loginSystem } = loginReducer.actions

export const mainProfileInitialStateReducer = createSlice({
  name: 'mainProfileInitialState',
  initialState: [{ name: '', email: '', password: '' }] as [
    { name: string; email: string; password: string }
  ],
  reducers: {
    setMainProfileInitialState: (
      state,
      action
      // action: PayloadAction<{ name: string; email: string; password: string }>
    ) => {
      console.log(action.payload)
      state[0] = action.payload
    },
  },
})
export const { setMainProfileInitialState } =
  mainProfileInitialStateReducer.actions

interface IprofileFields {
  name: string
  email: string
  password: string
}

export const profileInitialStateReducer = createSlice({
  name: 'profileInitialState',
  initialState: {
    name: 'Igor',
    email: 'ig.mar@yandex.ru',
    password: 'qwerty',
  } as IprofileFields,
  reducers: {
    resetProfileInitialState: (
      state,
      action: PayloadAction<IprofileFields>
    ) => {
      return action.payload
    },
  },
})
export const { resetProfileInitialState } = profileInitialStateReducer.actions

export const modalIngridientRefresh = createSlice({
  name: 'refreshModal',
  initialState: [] as Idata[],
  reducers: {
    refreshModalState: (state, action: PayloadAction<Idata[]>) => {
      console.log(action.payload)
      return action.payload
    },
  },
})
export const { refreshModalState } = modalIngridientRefresh.actions

// ============================================================= order lent modal

export const modalingFlagOrderLentReducer = createSlice({
  name: 'modaling',
  initialState: false as boolean,
  reducers: {
    modalFlagOrderLent: (state, action: PayloadAction<boolean>) => {
      return action.payload
    },
  },
})
export const { modalFlagOrderLent } = modalingFlagOrderLentReducer.actions

export const modalingFlagProfileOrderLentReducer = createSlice({
  name: 'modaling',
  initialState: false as boolean,
  reducers: {
    modalFlagProfileOrderLent: (state, action: PayloadAction<boolean>) => {
      return action.payload
    },
  },
})
export const { modalFlagProfileOrderLent } =
  modalingFlagProfileOrderLentReducer.actions

// ==================================websocket
export const orderLentStateReducer = createSlice({
  name: 'orderLentState',
  initialState: [] as Idata[],
  reducers: {
    orderLentStateFn: (state, action) => {
      return action.payload
    },
  },
})
export const { orderLentStateFn } = orderLentStateReducer.actions

export const totalOrderReducer = createSlice({
  name: 'totalOrder',
  initialState: 1 as number,
  reducers: {
    totalOrderFn: (state, action) => {
      return action.payload
    },
  },
})
export const { totalOrderFn } = totalOrderReducer.actions

export const profileOrderLentStateReducer = createSlice({
  name: 'profileOrderLentState',
  initialState: {} as IOrderLentObj,
  reducers: {
    profileOrderLentStateFn: (state, action) => {
      return action.payload
    },
  },
})
export const { profileOrderLentStateFn } = profileOrderLentStateReducer.actions
