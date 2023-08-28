import React, { useEffect, useState } from 'react'
import style from './modal-overlay.module.css'
import { createPortal } from 'react-dom'

import OrderDetailse from '../order-detailse/order-detailse'
import Modal from './modal'
import IngredientsDetails from '../ingridients-detailse/ingridients-detailse'
export default function ModalOverlay({
  modal,
  setModal,
  modalIng,
  data,
  setModalIng,
  idElem,
}) {
  const keyCloseModal = (e) => {
    if (e.key === 'Escape') {
      setModal(false)
      setModalIng(false)
    }
  }
  let activeClass = modal || modalIng ? `${style.active}` : `${style.modal}`
  const closeModal = () => {
    setModal(false)
    setModalIng(false)
    activeClass = modal || modalIng ? `${style.active}` : `${style.modal}`
  }
  useEffect(() => {
    document.addEventListener('keydown', keyCloseModal)
    return () => {
      document.removeEventListener('keydown', keyCloseModal)
    }
  }, [])

  return (
    <>
      {createPortal(
        <div className={activeClass} onClick={closeModal}>
          <Modal>
            {modal && <OrderDetailse modal={modal} setModal={setModal} />}
            {modalIng && (
              <IngredientsDetails
                modalIng={modalIng}
                setModalIng={setModalIng}
                data={data}
                idElem={idElem}
              />
            )}
          </Modal>
        </div>,
        document.getElementById('modal-root')
      )}
    </>
  )
}
