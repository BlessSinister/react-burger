import style from './modal.module.css'
import propTypes from '../../utils/props-types'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
export default function Modal(props) {
  // data={state.data}
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
  let setActiveClass =
    props.modal || props.modalIng ? `${style.active}` : `${style.modal}`
  const onCloseModal = () => {
    props.setModal(false)
    props.setModalIng(false)
    setActiveClass =
      props.modal || props.modalIng ? `${style.active}` : `${style.modal}`
  }
  let setModalIngContenClass = props.modalIng
    ? `${style.modal__content_ingr}`
    : null
  let setModalOrderContenClass = props.modal ? `${style.modal__content}` : null
  return createPortal(
    <div className={setActiveClass}>
      <div className={setModalOrderContenClass}>
        <div className={`${style.decor_wrapper_icon} mb-4`}>
          <CloseIcon type="primary" onClick={onCloseModal} />
        </div>

        {props.modal && props.children[0]}
      </div>

      <div className={setModalIngContenClass}>
        <div className={`${style.decor_wrapper_icon_ingr} mb-4`}>
          <h2 className={style.h2}>Детали ингредиента</h2>
          <CloseIcon type="primary" onClick={onCloseModal} />
        </div>
        {props.modalIng && props.children[1]}
      </div>
      <ModalOverlay onCloseModal={onCloseModal} />
    </div>,
    document.getElementById('modal-root')
  )
}
propTypes(Modal)
