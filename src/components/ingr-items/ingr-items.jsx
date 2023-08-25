import ing_items_style from './ingr-items.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
export default function IngrItems(props) {
  return (
    <div className={`${ing_items_style.card} mr-6 mb-8`}>
      <img src={props.image} alt="" />
      <div className={`${ing_items_style.price_wrapper} mt-2 mb-2`}>
        <p
          className={`mr-2 text text_type_main-medium ${ing_items_style.text_decor}`}
        >
          {props.price}
        </p>
        <CurrencyIcon type="primary" />
      </div>

      <p className={`text text_type_main-small `}>{props.name}</p>
    </div>
  )
}
IngrItems.propTypes = {
  _id: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
}
