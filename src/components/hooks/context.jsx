import React, { createContext, useState } from 'react'

export const CustomContext = createContext()
export const Context = (props) => {
  const [modal, setModal] = useState(false)
  const [modalIng, setModalIng] = useState(false)
  const [idElem, setIdElem] = useState(12)
  const modalFn = () => {
    setModal(!modal)
  }
  const modalIngFn = (id) => {
    setIdElem(id)
    setModalIng(!modalIng)
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
  }

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  )
}
