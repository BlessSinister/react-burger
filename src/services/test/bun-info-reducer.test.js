import { bunChanger, bunInfo } from '../reducer'

describe('bunInfo', () => {
  it('should return default state', () => {
    const result = bunInfo.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual([])
  })

  it('should return array without deleted item', () => {
    const action = {
      type: bunChanger.type,
      payload: {
        id: '643d69a5c3f7b9001cfa093d',
        data: [{ _id: '643d69a5c3f7b9001cfa093d' }],
      },
    }
    const result = bunInfo.reducer([], action)

    expect(result[0]._id).toBe('643d69a5c3f7b9001cfa093d')
  })
})
