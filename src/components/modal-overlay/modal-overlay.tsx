import style from './modal-overlay.module.css'
import propTypes from '../../utils/props-types'

interface IModalOverlay {
  onCloseModal: () => void
}

export default function ModalOverlay({ onCloseModal }: IModalOverlay) {
  return <div className={style.active} onClick={onCloseModal}></div>
}
propTypes(ModalOverlay)
