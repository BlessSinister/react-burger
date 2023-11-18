import { orderConstructorInfo, orderInfoGetter } from '../reducer'

describe('orderConstructorInfo', () => {
  it('should return default state', () => {
    const result = orderConstructorInfo.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual(0)
  })

  it('should return order number', () => {
    const action = {
      type: orderInfoGetter.type,
      payload: 'Wait order number' || 0,
    }
    const result = orderConstructorInfo.reducer(false, action)

    expect(result).toEqual('Wait order number' || 0)
  })
})
