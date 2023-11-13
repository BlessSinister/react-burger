import { keyGenerateIngridientsReducer, setKeyIngrId } from '../reducer'

describe('keyGenerateIngridientsReducer', () => {
  it('should return default state', () => {
    const result = keyGenerateIngridientsReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual([])
  })

  it('should return array with id elements in constructor', () => {
    const action = {
      type: setKeyIngrId.type,
      payload: 'id',
    }
    const result = keyGenerateIngridientsReducer.reducer([''], action)

    expect(result[0]).toBe('')
  })
})
