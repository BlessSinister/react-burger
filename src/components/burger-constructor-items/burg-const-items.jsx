import React from 'react'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import burg from './burg-const-tems.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
export default function BurgConstItems({ data }) {
  const data1 = []
  for (let i = 1; i < 8; i++) {
    data1.push(data[i])
  }
  return (
    <div className={`${burg.wrapper} mb-10`}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div
          className="decor_wrap"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: 10,
          }}
        >
          {/* Элемент ConstrucotrElement не удавалась выронять ни классическими mr,padd
          ни тем что были в библиотеки Яндекса, self флексов тоже не работало, в связи с чем
          принял решение создать обёртку и центрировать в ней */}
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={data[0].image}
            style={{ marginLeft: 40 }}
          />
        </div>

        {data1.map((item) => (
          // При создание элемента конструктора, предложенного из библиотеки
          // отсутствует возможность влиять на размер текста элементов и на отступы
          // не работает установка стилей в атрибутах элементов, с повышением специфичности,
          // с использованием important, с использованеим размеров и спейсинга из библиотеки яндекс,
          //  насколько я понял это связано с установкой размера пикселей
          // для последующего использования rem, есть ли иной способ повлиять на размеры?
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
            }}
            key={item._id}
          >
            <DragIcon type="primary" />

            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </div>
        ))}
        <div
          className="decor_wrap"
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            paddingRight: 10,
          }}
        >
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={data[0].image}
          />
        </div>
      </div>
    </div>
  )
}
