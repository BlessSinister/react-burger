import { addIngridientsList, burgerIngridientsReducer } from '../reducer'

describe('burgerIngridientsReducer', () => {
  it('should return default state', () => {
    const result = burgerIngridientsReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual([])
  })
  it('should add all ingredients in state', () => {
    const action = {
      type: addIngridientsList.type,
      payload: [
        {
          _id: '643d69a5c3f7b9001cfa093c',
          name: 'Краторная булка N-200i',
          type: 'bun',
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: 'https://code.s3.yandex.net/react/code/bun-02.png',
          image_mobile:
            'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
          image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
          __v: 0,
        },
      ],
    }
    const result = burgerIngridientsReducer.reducer([], action)
    expect(result[0]._id).toBe('643d69a5c3f7b9001cfa093c')
    expect(result[0].name).toBe('Краторная булка N-200i')
    expect(result[0].type).toBe('bun')
    expect(result[0].proteins).toBe(80)
    expect(result[0].fat).toBe(24)
    expect(result[0].carbohydrates).toBe(53)
    expect(result[0].calories).toBe(420)
    expect(result[0].price).toBe(1255)
    expect(result[0].image).toBe(
      'https://code.s3.yandex.net/react/code/bun-02.png'
    )
    expect(result[0].image_mobile).toBe(
      'https://code.s3.yandex.net/react/code/bun-02-mobile.png'
    )
    expect(result[0].image_large).toBe(
      'https://code.s3.yandex.net/react/code/bun-02-large.png'
    )
    expect(result[0].__v).toBe(0)
  })
})
