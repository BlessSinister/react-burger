import style from './modal-overlay.module.css'

interface IModalOverlay {
  onCloseModal: () => void
}

export default function ModalOverlay({ onCloseModal }: IModalOverlay) {
  return <div className={style.active} onClick={onCloseModal}></div>
}
