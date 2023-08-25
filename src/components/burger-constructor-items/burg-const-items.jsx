import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import burg_items_style from './burg-const-tems.module.css'
import app_style from '../app/app.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'

export default function BurgConstItems({ data }) {
  const data1 = []
  for (let i = 1; i < 8; i++) {
    data1.push(data[i])
  }
  return (
    <div className={`${burg_items_style.wrapper} mb-10 ${app_style.scroll}`}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
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
          {/* Не могу использовать для отступов родителеьский контейнер
            посколку, у динамически созданых элементов, помимо самого элемента
            есть также icon, в связи с чем элементы верхней и нижней булки, всё равно
            будет необходимо двигать навешивая дополнительные классы конкретно на них */}
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
BurgConstItems.propTypes = {
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
