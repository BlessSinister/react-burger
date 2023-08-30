const api = 'https://norma.nomoreparties.space/api/'
const url = `${api}ingredients`
const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export { checkResponse, url }
