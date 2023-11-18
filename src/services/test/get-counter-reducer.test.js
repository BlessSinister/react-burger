import { checkFlag, getCounterReducer } from '../reducer'

describe('getCounterReducer', () => {
  it('should return default state', () => {
    const result = getCounterReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual([])
  })

  it('should return array with id elements in constructor', () => {
    const action = {
      type: checkFlag.type,
      payload: {
        id: '',
        data: [],
        dropElements: [],
      },
    }
    const result = getCounterReducer.reducer([], action)

    expect(result).toEqual([''])
  })
})
