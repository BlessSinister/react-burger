import { modalIngridientRefresh, refreshModalState } from '../reducer'

describe('modalIngridientRefresh', () => {
  it('should return default state', () => {
    const result = modalIngridientRefresh.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual([])
  })

  it('should return refresh array data', () => {
    const action = {
      type: refreshModalState.type,
      payload: [],
    }
    const result = modalIngridientRefresh.reducer([], action)

    expect(result).toEqual([])
  })
})
