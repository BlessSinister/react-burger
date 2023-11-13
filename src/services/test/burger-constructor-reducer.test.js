import { addBurgerConstructorList, burgerConstructorReducer } from '../reducer'

describe('burgerConstructorReducer', () => {
  it('should return default state', () => {
    const result = burgerConstructorReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual([])
  })

  it('should add ingredient constructor item', () => {
    const action = {
      type: addBurgerConstructorList.type,
      payload: [],
    }
    const result = burgerConstructorReducer.reducer([], action)
    expect(result).toEqual([])
  })
})
