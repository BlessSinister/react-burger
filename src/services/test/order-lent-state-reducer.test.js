import { orderLentStateFn, orderLentStateReducer } from '../reducer'

describe('orderLentStateReducer', () => {
  it('should return default state', () => {
    const result = orderLentStateReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual([])
  })

  it('should return array with order items', () => {
    const action = {
      type: orderLentStateFn.type,
      payload: [],
    }
    const result = orderLentStateReducer.reducer([], action)

    expect(result).toEqual([])
  })
})
