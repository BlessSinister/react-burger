import React from 'react'
import IngrItems from '../ingr-items/ingr-items'
import ingrlist from './ingr-list.module.css'

export default function IngrList({ data }) {
  let bun = data.filter((item) => item.type == 'bun')
  let sauce = data.filter((item) => item.type == 'sauce')
  let main = data.filter((item) => item.type == 'main')
  console.log(data)
  return (
    <div className={ingrlist.ing_container}>
      <div>
        <h2 className={`text text_type_main-medium mb-6`}>Булки</h2>
        <div className={ingrlist.wrapper}>
          {bun.map((item) => (
            <IngrItems
              key={item._id}
              price={item.price}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className={`text text_type_main-medium mb-6`}>Соусы</h2>
        <div className={ingrlist.wrapper}>
          {sauce.map((item) => (
            <IngrItems
              key={item._id}
              price={item.price}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className={`text text_type_main-medium mb-6`}>Начинки</h2>
        <div className={ingrlist.wrapper}>
          {main.map((item) => (
            <IngrItems
              key={item._id}
              price={item.price}
              image={item.image}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
