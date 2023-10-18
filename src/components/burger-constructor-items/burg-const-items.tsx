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
  setKeyBunId,
  setKeyIngrId,
} from '../../services/reducer'
import BoxDndController from './box-dnd-controller'
import { v4 } from 'uuid'
import { Idata } from '../ing-list/ingr-list'

interface IBurgConstItems {
  data: Idata[]
  dropElements: []
  id: string
}

export default function BurgConstItems() {
  const dispatch = useDispatch()
  //@ts-ignore
  const keyIngridients = useSelector((state) => state.keyIngridientsGenerate)
  //@ts-ignore
  const keyBun = useSelector((state) => state.keyBunGenerate)
  const [, DropTargetRef] = useDrop(() => ({
    accept: 'ingridients',
    drop(itemId: IBurgConstItems) {
      console.log(itemId)
      if (
        itemId.id !== '643d69a5c3f7b9001cfa093c' &&
        itemId.id !== '643d69a5c3f7b9001cfa093d'
      ) {
        dispatch(dropTargetSetter(itemId))
        dispatch(checkFlag(itemId))
        dispatch(setKeyIngrId(v4()))
      } else {
        dispatch(bunChanger(itemId))
        dispatch(setKeyBunId(v4()))
      }
    },
  }))
  //@ts-ignore
  let dropElements = useSelector((state) => state.dropTargetElem)
  //@ts-ignore
  let bunInfo = useSelector((state) => state.bunState)

  return (
    <div
      className={`${burg_items_style.wrapper} mb-10 ${app_style.scroll}`}
      ref={DropTargetRef}
    >
      <div className={burg_items_style.content_container}>
        {bunInfo.length ? (
          <div className={burg_items_style.decor_wrap}>
            {bunInfo.map(
              //@ts-ignore
              (item, index) => (
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={`${item.name}  (верх)`}
                  price={item.price}
                  thumbnail={item.image}
                  key={keyBun[index]}
                />
              )
            )}
          </div>
        ) : null}

        {dropElements.map(
          //@ts-ignore
          (item, index) => (
            <BoxDndController
              //@ts-ignore
              className={burg_items_style.box_dnd_wrapper}
              data={dropElements}
              index={index}
              key={keyIngridients[index]}
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
          )
        )}

        {bunInfo.length || dropElements.length ? (
          <div className={burg_items_style.decor_wrap}>
            {bunInfo.map(
              //@ts-ignore
              (item, index) => (
                <ConstructorElement
                  key={keyBun[index]}
                  type="bottom"
                  isLocked={true}
                  text={`${item.name}  (низ)`}
                  price={item.price}
                  thumbnail={item.image}
                />
              )
            )}
          </div>
        ) : (
          <h2>
            Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа
            <hr />
          </h2>
        )}
      </div>
    </div>
  )
}
