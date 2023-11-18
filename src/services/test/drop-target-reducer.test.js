import { deleteItems, dropTargetReducer, mixConstructorItems } from '../reducer'

describe('dropTargetReducer', () => {
  it('should return default state', () => {
    const result = dropTargetReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual([])
  })

  it('should return array with mix items', () => {
    const action = {
      type: mixConstructorItems.type,
      payload: [],
    }
    const result = dropTargetReducer.reducer([], action)

    expect(result).toEqual([])
  })

  it('should return array without deleted item', () => {
    const action = {
      type: deleteItems.type,
      payload: [],
    }
    const result = dropTargetReducer.reducer([], action)

    expect(result).toEqual([])
  })
})
