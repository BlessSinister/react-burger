import style from './modal.module.css'
import propTypes from '../../utils/props-types'
export default function Modal(props) {
  return <div className={style.modal__content}>{props.children}</div>
}
propTypes(Modal)
