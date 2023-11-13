import { getConnectInfo, wsConnectedOrderLent } from '../reducer'

describe('wsConnectedOrderLent', () => {
  it('should return default state', () => {
    const result = wsConnectedOrderLent.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual(false)
  })

  it('should return boolean value (connect ws all orders)', () => {
    const action = {
      type: getConnectInfo.type,
      payload: true || false,
    }
    const result = wsConnectedOrderLent.reducer(false, action)

    expect(result).toEqual(true || false)
  })
})
