import style from './modal.module.css'
import propTypes from '../../utils/props-types'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import ModalOverlay from '../modal-overlay/modal-overlay'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch } from 'react-redux'
import { modalFlag, modalOrderFlag } from '../../services/reducer'
export default function Modal({ modalIng, children, modal }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const keyCloseModal = (e) => {
      if (e.key === 'Escape') {
        dispatch(modalOrderFlag(false))
        dispatch(modalFlag(false))
      }
    }

    document.addEventListener('keydown', keyCloseModal)
    return () => {
      document.removeEventListener('keydown', keyCloseModal)
    }
  }, [])
  let setActiveClass = modal || modalIng ? `${style.active}` : `${style.modal}`
  const onCloseModal = () => {
    dispatch(modalOrderFlag(false))
    dispatch(modalFlag(false))
    setActiveClass = modal || modalIng ? `${style.active}` : `${style.modal}`
  }
  let setModalIngContenClass = modalIng
    ? `${style.modal__content_ingr}`
    : modal
    ? `${style.modal__content}`
    : null
  return createPortal(
    <div className={setActiveClass}>
      <div className={setModalIngContenClass}>
        <div className={`${style.decor_wrapper_icon} mb-4`}>
          {modalIng && <h2 className={style.h2}>Детали ингредиента</h2>}
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