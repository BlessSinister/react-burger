import React, { useRef, ReactNode } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { mixConstructorItems } from '../../services/reducer'
import { useDispatch } from 'react-redux'
import { Idata } from '../ing-list/ingr-list'
interface IBoxDndControllerProps {
  data: Idata[]
  index: number
  children: ReactNode
}
interface IhoverItem {
  index: number
}
export default function BoxDndController({
  index,
  data,
  children,
}: IBoxDndControllerProps) {
  const dispatch = useDispatch()

  const moveConstructorItems = (dragIndex: number, hoverIndex: number) => {
    const dragCard = data[dragIndex]

    const newMix = [...data]
    newMix.splice(dragIndex, 1)
    newMix.splice(hoverIndex, 0, dragCard)
    dispatch(mixConstructorItems(newMix))
  }
  const ref = useRef<HTMLDivElement>(null)

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'constMix',
    item: () => {
      return { index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }))
  const opacity = isDragging ? 0 : 1
  const [, drop] = useDrop({
    accept: 'constMix',
    hover: (item: IhoverItem, monitor) => {
      const dragIndex: number = item.index

      const hoverIndex: number = index

      const hoverBoundingRect = ref.current
        ? ref.current.getBoundingClientRect()
        : null

      const hoverMiddleY = hoverBoundingRect
        ? (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        : null

      const clientOffset = monitor.getClientOffset()

      const hoverClientY =
        hoverBoundingRect && clientOffset
          ? clientOffset.y - hoverBoundingRect.top
          : null

      if (
        dragIndex < hoverIndex && hoverClientY && hoverMiddleY
          ? hoverClientY < hoverMiddleY
          : null
      ) {
        return
      }

      if (
        dragIndex > hoverIndex && hoverClientY && hoverMiddleY
          ? hoverClientY < hoverMiddleY
          : null
      ) {
        return
      }
      moveConstructorItems(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })
  drag(drop(ref))

  return (
    <div ref={ref} style={{ opacity }}>
      {children}
    </div>
  )
}
