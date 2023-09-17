import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import burg_items_style from './burg-const-tems.module.css'
import app_style from '../app/app.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDrop } from 'react-dnd/dist/hooks/useDrop'
import { useDispatch, useSelector } from 'react-redux'
import {
  bunChanger,
  checkFlag,
  deleteItems,
  dropTargetSetter,
} from '../../services/reducer'
import BoxDndController from './box-dnd-controller'
import { v4 as uuidv4 } from 'uuid'

export default function BurgConstItems() {
  const dispatch = useDispatch()
  const [, DropTargetRef] = useDrop(() => ({
    accept: 'ingridients',
    drop(itemId) {
      if (
        itemId.id !== '643d69a5c3f7b9001cfa093c' &&
        itemId.id !== '643d69a5c3f7b9001cfa093d'
      ) {
        dispatch(dropTargetSetter(itemId))
        dispatch(checkFlag(itemId))
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
              key={uuidv4()}
            />
          ))}
        </div>

        {dropElements.map((item, index) => (
          <BoxDndController
            className={burg_items_style.box_dnd_wrapper}
            data={dropElements}
            index={index}
            key={uuidv4()}
          >
            <div className={burg_items_style.decor_wrap_dnd}>
              <div
                onClick={() => dispatch(deleteItems(index))}
                className={burg_items_style.trash_decor}
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
              key={uuidv4()}
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
