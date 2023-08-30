import style from './modal-overlay.module.css'
import propTypes from '../../utils/props-types'

export default function ModalOverlay(props) {
  let setActiveClass =
    props.modal || props.modalIng ? `${style.active}` : `${style.modal}`

  const closeModal = () => {
    props.setModal(false)
    props.setModalIng(false)
    setActiveClass =
      props.modal || props.modalIng ? `${style.active}` : `${style.modal}`
  }

  return <div className={setActiveClass} onClick={closeModal}></div>
}
propTypes(ModalOverlay)
