import style from './modal-overlay.module.css'
import propTypes from '../../utils/props-types'

export default function ModalOverlay(props) {
  return <div className={style.active} onClick={props.onCloseModal}></div>
}
propTypes(ModalOverlay)
