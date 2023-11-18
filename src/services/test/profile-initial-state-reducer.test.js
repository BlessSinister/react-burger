import {
  profileInitialStateReducer,
  resetProfileInitialState,
} from '../reducer'

describe('profileInitialStateReducer', () => {
  it('should return default state', () => {
    const result = profileInitialStateReducer.reducer(undefined, {
      type: '',
    })
    expect(result).toEqual({
      name: 'Igor',
      email: 'ig.mar@yandex.ru',
      password: 'qwerty',
    })
  })

  it('should return defaul profile value', () => {
    const action = {
      type: resetProfileInitialState.type,
      payload: {
        name: 'Igor',
        email: 'ig.mar@yandex.ru',
        password: 'qwerty',
      },
    }
    const result = profileInitialStateReducer.reducer(
      {
        name: 'Igor',
        email: 'ig.mar@yandex.ru',
        password: 'qwerty',
      },
      action
    )

    expect(result.name).toEqual('Igor')
  })
})
