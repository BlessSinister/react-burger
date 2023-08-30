import style from './modal-overlay.module.css'
import { createPortal } from 'react-dom'
import propTypes from '../../utils/props-types'
import OrderDetailse from '../order-detailse/order-detailse'
import Modal from '../modal/modal'
import IngredientDetails from '../ingredient-details/ingredient-details'
export default function ModalOverlay({
  modal,
  setModal,
  modalIng,
  data,
  setModalIng,
  idElem,
}) {
  const keyCloseModal = (e) => {
    if (e.key === 'Escape') {
      setModal(false)
      setModalIng(false)
    }
  }
  let setActiveClass = modal || modalIng ? `${style.active}` : `${style.modal}`
  const closeModal = () => {
    setModal(false)
    setModalIng(false)
    setActiveClass = modal || modalIng ? `${style.active}` : `${style.modal}`
  }

  return (
    <>
      {createPortal(
        <div className={setActiveClass} onClick={closeModal}>
          <Modal keyCloseModal={keyCloseModal}>
            {modal && <OrderDetailse modal={modal} setModal={setModal} />}
            {modalIng && (
              <IngredientDetails
                modalIng={modalIng}
                setModalIng={setModalIng}
                data={data}
                idElem={idElem}
              />
            )}
          </Modal>
        </div>,
        document.getElementById('modal-root')
      )}
    </>
  )
}
propTypes(ModalOverlay)
