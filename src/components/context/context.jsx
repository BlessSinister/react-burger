import React, { createContext, useState } from 'react'

export const CustomContext = createContext()
export const Context = (props) => {
  const [modal, setModal] = useState(false)
  const [modalIng, setModalIng] = useState(false)
  const [idElem, setIdElem] = useState()
  const [state, setState] = useState({})
  const modalFn = () => {
    setModal(!modal)
  }
  const modalIngFn = (id) => {
    setIdElem(id)
    setModalIng(!modalIng)
  }
  let ingredientDetails = []
  if (state.data) {
    ingredientDetails = state.data.filter((item) => item._id === idElem)
  }

  const value = {
    modal,
    modalIng,
    setModal,
    modalFn,
    modalIngFn,
    idElem,
    setIdElem,
    setModalIng,
    state,
    setState,
    ingredientDetails,
  }

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  )
}
