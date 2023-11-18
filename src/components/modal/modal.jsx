import style from './modal.module.css'
import propTypes from '../../utils/props-types'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay'
import PropTypes from 'prop-types'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function Modal({ modalIng, children, modal, onCloseModal }) {
  useEffect(() => {
    const keyCloseModal = (e) => {
      if (e.key === 'Escape') {
        onCloseModal()
      }
    }

    document.addEventListener('keydown', keyCloseModal)
    return () => {
      document.removeEventListener('keydown', keyCloseModal)
    }
  }, [])
  let setActiveClass = modal || modalIng ? `${style.active}` : `${style.modal}`
  let setModalIngContenClass = modalIng
    ? `${style.modal__content_ingr}`
    : modal
    ? `${style.modal__content}`
    : null

  return createPortal(
    <div className={setActiveClass}>
      <div className={setModalIngContenClass}>
        <div className={`${style.decor_wrapper_icon} `}>
          <CloseIcon type="primary" onClick={onCloseModal} />
        </div>
        {children}
      </div>
      <ModalOverlay onCloseModal={onCloseModal} />
    </div>,
    document.getElementById('modal-root')
  )
}
propTypes(Modal)

Modal.propTypes = {
  modal: PropTypes.bool,
  modalIng: PropTypes.bool,
  onCloseModal: PropTypes.func,
}
