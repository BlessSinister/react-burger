import { forgotPass, forgotPasswordReducer } from '../reducer'

describe('forgotPasswordReducer', () => {
  it('should return default state', () => {
    const result = forgotPasswordReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual(false)
  })

  it('should return boolean for routing between forgotpass and resetpass pages', () => {
    const action = {
      type: forgotPass.type,
      payload: true || false,
    }
    const result = forgotPasswordReducer.reducer(false, action)

    expect(result).toEqual(true || false)
  })
})
