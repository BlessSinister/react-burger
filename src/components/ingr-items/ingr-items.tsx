import ing_items_style from './ingr-items.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { modalChanger, modalFlag } from '../../services/reducer'
import { useDrag } from 'react-dnd'
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'

interface IingrItems {
  image: string
  name: string
  price: number
  id: string
  dropElements: object[]
}
export default function IngrItems({
  image,
  name,
  price,
  id,
  dropElements,
}: IingrItems) {
  const data = useAppSelector((state) => state.burgerIngridients)
  const [, drag] = useDrag(() => ({
    type: 'ingridients',
    item: { id, data, dropElements },
  }))

  const dispatch = useAppDispatch()

  return (
    <div onClick={() => dispatch(modalFlag(true))} ref={drag}>
      <div
        className={`${ing_items_style.card} mb-8`}
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
