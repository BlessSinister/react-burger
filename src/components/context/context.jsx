import React, { createContext, useState } from 'react'

export const CustomContext = createContext()
export const Context = (props) => {
  const [modal, setModal] = useState(false)

  const [idElem, setIdElem] = useState()
  const [state, setState] = useState({})
  const modalFn = () => {
    setModal(!modal)
  }

  const value = {
    modal,
    setModal,
    modalFn,
    idElem,
    setIdElem,
    state,
    setState,
  }

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  )
}
