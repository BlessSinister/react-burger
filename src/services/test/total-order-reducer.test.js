import { totalOrderFn, totalOrderReducer } from '../reducer'

describe('totalOrderReducer', () => {
  it('should return default state', () => {
    const result = totalOrderReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual({})
  })

  it('should return object from ws with array orders all users', () => {
    const action = {
      type: totalOrderFn.type,
      payload: {
        success: true || false,
        orders: [],
        total: 25601,
        totalToday: 103,
      },
    }
    const result = totalOrderReducer.reducer({}, action)

    expect(result.success).toEqual(true || false)
  })
})
