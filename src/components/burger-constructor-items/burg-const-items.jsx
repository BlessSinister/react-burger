import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import burg_items_style from './burg-const-tems.module.css'
import app_style from '../app/app.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { useDrop } from 'react-dnd/dist/hooks/useDrop'
import { useDispatch, useSelector } from 'react-redux'
import { dropTargetSetter } from '../../services/reducer'
import BoxDndController from './box-dnd-controller'

export default function BurgConstItems({ bun, counter }) {
  const dispatch = useDispatch()
  const [, DropTargetRef] = useDrop(() => ({
    accept: 'ingridients',
    drop(itemId) {
      dispatch(dropTargetSetter(itemId))
    },
  }))
  let data = useSelector((state) => state.dropTargetElem)

  // let x = document.querySelectorAll('.constructor-element__action svg')
  // let arr = [...x]
  // arr.shift()
  // arr.pop()
  // console.log(arr)

  // $0.getAttribute('d').startsWith('M18.9391') иконка помойки начинается со строки M18 можем найти подстроку и выделить тем самым только помойки свг
  return (
    <div className={`${burg_items_style.wrapper} mb-10 ${app_style.scroll}`}>
      <div className={burg_items_style.content_container} ref={DropTargetRef}>
        <div className={burg_items_style.decor_wrap}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={bun[0].image}
          />
        </div>

        {data.map((item, index) => (
          <BoxDndController
            style={{ width: '100%', heitgh: '200px' }}
            data={data}
            index={index}
            key={++counter}
          >
            <div className={burg_items_style.decor_wrap_dnd}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </div>
          </BoxDndController>
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
