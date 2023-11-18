import { keyGenerateBunReducer, setKeyBunId } from '../reducer'

describe('keyGenerateBunReducer', () => {
  it('should return default state', () => {
    const result = keyGenerateBunReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual([])
  })

  it('should return array with id elements in constructor', () => {
    const action = {
      type: setKeyBunId.type,
      payload: 'id',
    }
    const result = keyGenerateBunReducer.reducer([''], action)

    expect(result[0]).toBe('')
  })
})
