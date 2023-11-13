import {
  modalFlagProfileOrderLent,
  modalingFlagProfileOrderLentReducer,
} from '../reducer'

describe('modalingFlagProfileOrderLentReducer', () => {
  it('should return default state', () => {
    const result = modalingFlagProfileOrderLentReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual(false)
  })

  it('should return boolean value active modal order profile lent', () => {
    const action = {
      type: modalFlagProfileOrderLent.type,
      payload: true || false,
    }
    const result = modalingFlagProfileOrderLentReducer.reducer(false, action)

    expect(result).toEqual(true || false)
  })
})
