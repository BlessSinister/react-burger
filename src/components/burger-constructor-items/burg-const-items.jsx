import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import burg_items_style from './burg-const-tems.module.css'
import app_style from '../app/app.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import { useDrop } from 'react-dnd/dist/hooks/useDrop'
import { useDispatch, useSelector } from 'react-redux'
import {
  bunChanger,
  deleteItems,
  dropTargetSetter,
} from '../../services/reducer'
import BoxDndController from './box-dnd-controller'

export default function BurgConstItems({ counter }) {
  const dispatch = useDispatch()
  const [, DropTargetRef] = useDrop(() => ({
    accept: 'ingridients',
    drop(itemId) {
      if (
        itemId.id !== '643d69a5c3f7b9001cfa093c' &&
        itemId.id !== '643d69a5c3f7b9001cfa093d'
      ) {
        dispatch(dropTargetSetter(itemId))
      } else {
        dispatch(bunChanger(itemId))
      }
    },
  }))

  let dropElements = useSelector((state) => state.dropTargetElem)
  let bunInfo = useSelector((state) => state.bunState)

  return (
    <div
      className={`${burg_items_style.wrapper} mb-10 ${app_style.scroll}`}
      ref={DropTargetRef}
    >
      <div className={burg_items_style.content_container}>
        <div className={burg_items_style.decor_wrap}>
          {bunInfo.map((item) => (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          ))}
        </div>

        {dropElements.map((item, index) => (
          <BoxDndController
            style={{ width: '100%', heitgh: '80px' }}
            data={dropElements}
            index={index}
            key={++counter}
          >
            <div
              className={burg_items_style.decor_wrap_dnd}
              // style={{ position: 'relative' }}
            >
              <div
                onClick={() => dispatch(deleteItems(index))}
                style={{
                  zIndex: 2,
                  position: 'absolute',
                  width: 25,
                  height: 25,
                  marginLeft: '475px',
                  cursor: 'pointer',
                }}
              ></div>
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
          {bunInfo.map((item) => (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          ))}
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
