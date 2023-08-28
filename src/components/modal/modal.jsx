import style from './modal.module.css'
import propTypes from '../../utils/props-types'
import { useEffect } from 'react'
export default function Modal(props) {
  useEffect(() => {
    document.addEventListener('keydown', props.keyCloseModal)
    return () => {
      document.removeEventListener('keydown', props.keyCloseModal)
    }
  }, [props.keyCloseModal])

  return <div className={style.modal__content}>{props.children}</div>
}
propTypes(Modal)
