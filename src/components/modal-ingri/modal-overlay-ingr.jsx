import style from './modal-overlay-ingr.module.css'

import React from 'react'

export default function ModalOverlayIngr({ setModalIng }) {
  const closeModal = () => {
    setModalIng(false)
  }
  return (
    <div>
      <div className={style.modal} onClick={closeModal}>
        <div
          className={`${style.modal__content}`}
          onClick={(e) => e.stopPropagation()}
        ></div>
      </div>
    </div>
  )
}
