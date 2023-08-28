import React from 'react'
import style from './modal.module.css'
export default function Modal(props) {
  console.log(props)
  return <div className={style.modal__content}>{props.children}</div>
}
