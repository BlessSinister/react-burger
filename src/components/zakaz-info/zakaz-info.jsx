import zakaz from '../zakaz-info/zakaz-info.module.css'
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
export default function ZakazInfo() {
  return (
    <div className={zakaz.wrapper}>
      <div className={`${zakaz.decor_wrapper_price} mr-10`}>
        <p className={`ml-2 text text_type_main-large ${zakaz.p}`}>610</p>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  )
}
