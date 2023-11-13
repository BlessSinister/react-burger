import { modalFlag, modalingFlagReducer } from '../reducer'

describe('modalingFlagReducer', () => {
  it('should return default state', () => {
    const result = modalingFlagReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual(false)
  })

  it('should modal ingredient element flag', () => {
    const action = {
      type: modalFlag.type,
      payload: true || false,
    }
    const result = modalingFlagReducer.reducer(false, action)

    expect(result).toBe(true || false)
  })
})
