import { modalOrderFlag, modalOrderFlagReducer } from '../reducer'

describe('modalOrderFlagReducer', () => {
  it('should return default state', () => {
    const result = modalOrderFlagReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual(false)
  })

  it('should modal order element flag', () => {
    const action = {
      type: modalOrderFlag.type,
      payload: true || false,
    }
    const result = modalOrderFlagReducer.reducer(false, action)

    expect(result).toBe(true || false)
  })
})
