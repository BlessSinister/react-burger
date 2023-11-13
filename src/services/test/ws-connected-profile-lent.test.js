import { getConnectInfoProfile, wsConnectedProfileLent } from '../reducer'

describe('wsConnectedProfileLent', () => {
  it('should return default state', () => {
    const result = wsConnectedProfileLent.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual(false)
  })

  it('should return boolean value (connect ws auth user orders)', () => {
    const action = {
      type: getConnectInfoProfile.type,
      payload: true || false,
    }
    const result = wsConnectedProfileLent.reducer(false, action)

    expect(result).toEqual(true || false)
  })
})
