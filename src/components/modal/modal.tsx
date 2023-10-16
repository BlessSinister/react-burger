import { ReactNode } from 'react'
import style from './modal.module.css'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

interface Imodal {
  modalIng?: any
  children: ReactNode
  modal?: any
  onCloseModal: () => void
}

export default function Modal({
  modalIng,
  children,
  modal,
  onCloseModal,
}: Imodal): JSX.Element | null {
  useEffect(() => {
    const keyCloseModal = (e: KeyboardEvent) => {
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
    : undefined

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
    document.getElementById('modal-root')!
  )
}
