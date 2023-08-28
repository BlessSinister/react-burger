import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import burg_items_style from './burg-const-tems.module.css'
import app_style from '../app/app.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import propTypes from '../../utils/props-types'

export default function BurgConstItems({ data }) {
  const data1 = []

  if (data) {
    for (let i = 1; i < 8; i++) {
      data1.push(data[i])
    }
  } else {
    return
  }

  return (
    <div className={`${burg_items_style.wrapper} mb-10 ${app_style.scroll}`}>
      <div className={burg_items_style.content_container}>
        {/* Эти стили сделаные не мною, они прописаны в самом компоненте
        из UI библиотеки, поэтому я их не трогаю */}
        <div className={burg_items_style.decor_wrap}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={data[0].image}
          />
        </div>
        {data1.map((item) => (
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
            thumbnail={data[0].image}
          />
        </div>
      </div>
    </div>
  )
}

propTypes(BurgConstItems)
