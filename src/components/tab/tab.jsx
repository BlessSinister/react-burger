import React from 'react'
import tab from './tab.module.css'
export default function Tab({ name }) {
  return (
    <p className={`text text_type_main-default pb-4 pt-4 pl-10 pr-10`}>
      {name}
    </p>
  )
}
