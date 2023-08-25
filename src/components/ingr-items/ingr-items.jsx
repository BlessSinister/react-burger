import ing from './ingr-items.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
export default function IngrItems(props) {
  return (
    <div className={`${ing.card} mr-6 mb-8`}>
      <img src={props.image} alt="" />
      <div className={`${ing.price_wrapper} mt-2 mb-2`}>
        <p className={`mr-2 text text_type_main-medium`}>{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>

      <p className={`text text_type_main-small`}>{props.name}</p>
    </div>
  )
}
