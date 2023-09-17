import { useSelector } from 'react-redux'
import style from './order-details.module.css'
export default function OrderDetails() {
  const orderNumber = useSelector((state) => state.order)
  return (
    <div className={style.modal}>
      <div
        className={`${style.modal__content}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={`${style.h2} mb-8`}>{orderNumber}</h2>

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
  )
}
