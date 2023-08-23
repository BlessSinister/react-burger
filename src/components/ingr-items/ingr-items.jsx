import React from 'react'
import ing from './ingr-items.module.css'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
export default function IngrItems(props) {
  return (
    <div className={`${ing.card} mr-6 mb-8`}>
      {/* <Counter count={1} size="default" extraClass="m-1" /> */}
      <img src={props.image} alt="" />
      <div className={`${ing.price_wrapper} mt-2 mb-2`}>
        <p className={`mr-2 text text_type_main-medium`}>{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>

      <p className={`text text_type_main-small`}>{props.name}</p>
    </div>
  )
}
