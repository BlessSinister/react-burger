import { modalFlagOrderLent, modalingFlagOrderLentReducer } from '../reducer'

describe('modalingFlagOrderLentReducer', () => {
  it('should return default state', () => {
    const result = modalingFlagOrderLentReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual(false)
  })

  it('should return boolean value active modal order lent', () => {
    const action = {
      type: modalFlagOrderLent.type,
      payload: true || false,
    }
    const result = modalingFlagOrderLentReducer.reducer(false, action)

    expect(result).toEqual(true || false)
  })
})
