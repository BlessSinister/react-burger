import React, { useEffect } from 'react'
import style from './modal-overlay.module.css'
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components'

export default function ModalOverlay({ modal, setModal }) {
  const closeModal = () => {
    setModal(false)
  }
  const keyCloseModal = (e) => {
    if (e.key === 'Escape') {
      setModal(false)
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', keyCloseModal)
    return () => {
      document.removeEventListener('keydown', keyCloseModal)
    }
  }, [])

  return (
    <div>
      <div className={style.modal} onClick={closeModal}>
        <div
          className={`${style.modal__content}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`${style.decor_wrapper_icon} mb-4`}>
            <CloseIcon type="primary" onClick={closeModal} />
          </div>

          <h2 className={`${style.h2} mb-8`}>034546</h2>
          <p className={`${style.p_content_item1}  ${style.p} mb-15`}>
            идентификатор заказа
          </p>
          <div className={`${style.img_decor_wrapper} mb-15`}></div>
          <p className={` ${style.p} mb-2`}>Ваш заказ начали готовить</p>
          <p className={`${style.p_content_item3} ${style.p} mb-2`}>
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      </div>
    </div>
  )
}
