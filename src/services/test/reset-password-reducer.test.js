import { resetPass, resetPasswordReducer } from '../reducer'

describe('resetPasswordReducer', () => {
  it('should return default state', () => {
    const result = resetPasswordReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual(false)
  })

  it('should return boolean for routing resetpass page', () => {
    const action = {
      type: resetPass.type,
      payload: true || false,
    }
    const result = resetPasswordReducer.reducer(false, action)

    expect(result).toEqual(true || false)
  })
})
