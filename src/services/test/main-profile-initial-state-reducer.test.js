import {
  mainProfileInitialStateReducer,
  setMainProfileInitialState,
} from '../reducer'

describe('mainProfileInitialStateReducer', () => {
  it('should return default state', () => {
    const result = mainProfileInitialStateReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual([{ name: '', email: '', password: '' }])
  })

  it('should return new profile value', () => {
    const action = {
      type: setMainProfileInitialState.type,
      payload: { name: 'Igor', email: '', password: '' },
    }
    const result = mainProfileInitialStateReducer.reducer(
      [{ name: '', email: '', password: '' }],
      action
    )

    expect(result[0].name).toEqual('Igor')
  })
})
