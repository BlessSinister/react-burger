import {
  profileOrderLentStateFn,
  profileOrderLentStateReducer,
} from '../reducer'

describe('profileOrderLentStateReducer', () => {
  it('should return default state', () => {
    const result = profileOrderLentStateReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual({})
  })

  it('should return object from ws with array orders auth user', () => {
    const action = {
      type: profileOrderLentStateFn.type,
      payload: {
        success: true || false,
        orders: [],
        total: 25601,
        totalToday: 103,
      },
    }
    const result = profileOrderLentStateReducer.reducer({}, action)

    expect(result.success).toEqual(true || false)
  })
})
