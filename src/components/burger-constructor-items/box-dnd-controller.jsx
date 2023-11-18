import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { mixConstructorItems } from '../../services/reducer'
import { useDispatch } from 'react-redux'

export default function BoxDndController(props) {
  const dispatch = useDispatch()
  const moveConstructorItems = (dragIndex, hoverIndex) => {
    const dragCard = data[dragIndex]

    const newMix = [...data]
    newMix.splice(dragIndex, 1)
    newMix.splice(hoverIndex, 0, dragCard)
    dispatch(mixConstructorItems(newMix))
  }
  const ref = useRef(null)
  const { index, data } = props

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
    hover: (item, monitor) => {
      const dragIndex = item.index

      const hoverIndex = index

      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      moveConstructorItems(dragIndex, hoverIndex)
      item.index = hoverIndex
    },
  })
  drag(drop(ref))

  return (
    <div ref={ref} style={{ opacity }}>
      {props.children}
    </div>
  )
}
