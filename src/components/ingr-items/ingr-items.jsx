import ing_items_style from './ingr-items.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { ingItemsPropType } from '../../utils/props-types'
export default function IngrItems({ image, name, price, modalIngFn, id }) {
  const openModalIng = (id) => {
    modalIngFn(id)
  }

  return (
    <div
      className={`${ing_items_style.card} mr-6 mb-8`}
      onClick={() => openModalIng(id)}
      id={id}
    >
      <img src={image} alt="" />
      <div className={`${ing_items_style.price_wrapper} mt-2 mb-2`}>
        <p
          className={`mr-2 text text_type_main-medium ${ing_items_style.text_decor}`}
        >
          {price}
        </p>
        <CurrencyIcon type="primary" />
      </div>

      <p className={`text text_type_main-small `}>{name}</p>
    </div>
  )
}

ingItemsPropType(IngrItems)
