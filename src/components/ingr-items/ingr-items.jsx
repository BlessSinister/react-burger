import ing_items_style from './ingr-items.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { modalChanger, modalFlag } from '../../services/reducer'
import { useDispatch, useSelector } from 'react-redux'

export default function IngrItems({ image, name, price, modalIngFn, id }) {
  // const openModalIng = (id) => {
  //   modalIngFn(id)
  // }
  const data = useSelector((state) => state.burgerIngridients)

  const dispatch = useDispatch()
  return (
    <div onClick={() => dispatch(modalFlag())}>
      <div
        className={`${ing_items_style.card} mr-6 mb-8`}
        onClick={() => dispatch(modalChanger({ id: id, data: data }))}
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
    </div>
  )
}

IngrItems.propTypes = {
  _id: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  modalIngFn: PropTypes.func,
}
