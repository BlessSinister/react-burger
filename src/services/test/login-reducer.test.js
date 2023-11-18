import { loginReducer, loginSystem } from '../reducer'

describe('loginReducer', () => {
  it('should return default state', () => {
    const result = loginReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual(false)
  })

  it('should return boolean auth value', () => {
    const action = {
      type: loginSystem.type,
      payload: true || false,
    }
    const result = loginReducer.reducer(false, action)

    expect(result).toEqual(true || false)
  })
})
