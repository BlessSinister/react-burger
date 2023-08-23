import React from 'react'
import constStyle from './burger-constructor.module.css'
import BurgConstItems from '../burger-constructor-items/burg-const-items'
import ZakazInfo from '../zakaz-info/zakaz-info'
export default function BurgerConstructor({ data }) {
  return (
    <section className={`${constStyle.wrapper} mt-25`}>
      <BurgConstItems data={data} />
      <ZakazInfo />
    </section>
  )
}
