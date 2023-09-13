import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import burg_items_style from './burg-const-tems.module.css'
import app_style from '../app/app.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'

export default function BurgConstItems({ data, bun }) {
  return (
    <div className={`${burg_items_style.wrapper} mb-10 ${app_style.scroll}`}>
      <div className={burg_items_style.content_container}>
        <div className={burg_items_style.decor_wrap}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={bun[0].image}
          />
        </div>
        {data.map((item) => (
          <div className={burg_items_style.decor_wrap_dnd} key={item._id}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </div>
        ))}
        <div className={burg_items_style.decor_wrap}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={bun[0].image}
          />
        </div>
      </div>
    </div>
  )
}

BurgConstItems.propTypes = {
  price: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  isLocked: PropTypes.bool,
  type: PropTypes.string,
  thumbnail: PropTypes.string,
  data: PropTypes.array,
}
