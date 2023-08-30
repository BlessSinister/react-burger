import style from './modal.module.css'
import propTypes from '../../utils/props-types'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay'
export default function Modal(props) {
  useEffect(() => {
    const keyCloseModal = (e) => {
      if (e.key === 'Escape') {
        props.setModal(false)
        props.setModalIng(false)
      }
    }
    document.addEventListener('keydown', keyCloseModal)
    return () => {
      document.removeEventListener('keydown', keyCloseModal)
    }
  }, [])

  return createPortal(
    <div>
      <div onClick={props.closeModal} className={style.modal__content}>
        {props.modal && props.children[0]}
        {props.modalIng && props.children[1]}
      </div>
      <ModalOverlay
        modal={props.modal}
        modalIng={props.modalIng}
        setModal={props.setModal}
        setModalIng={props.setModalIng}
      />
    </div>,
    document.getElementById('modal-root')
  )
}
propTypes(Modal)
