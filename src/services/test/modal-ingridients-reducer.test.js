import { modalChanger, modalIngridientsReducer } from '../reducer'

describe('modalIngridientsReducer', () => {
  it('should return default state', () => {
    const result = modalIngridientsReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual([])
  })

  it('should add current igredient element', () => {
    const action = {
      type: modalChanger.type,
      payload: {
        id: '643d69a5c3f7b9001cfa093c',
        data: [],
      },
    }
    const result = modalIngridientsReducer.reducer([], action)

    expect(result).toEqual([])
  })
})
