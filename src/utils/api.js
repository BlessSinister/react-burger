const api = 'https://norma.nomoreparties.space/api/'
const url = `${api}ingredients`
async function getData() {
  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      return data
    }
  } catch (err) {
    console.log(err)
  }
}

export { getData }
