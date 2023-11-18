import IngrItems from '../ingr-items/ingr-items'
import ingr_list_style from './ingr-list.module.css'
import app_style from '../app/app.module.css'
import PropTypes from 'prop-types'
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'
import { useSelector } from 'react-redux'

export default function IngrList({ data, modalIngFn, tabScrollChanger }) {
  let bun, sauce, main
  let dropElements = useSelector((state) => state.dropTargetElem)
  if (data) {
    bun = data.filter((item) => item.type === 'bun')
    sauce = data.filter((item) => item.type === 'sauce')
    main = data.filter((item) => item.type === 'main')
  } else {
    return
  }
  const targetCounter = (arr) => {
    let tagetCount = []
    for (let key of arr) {
      tagetCount.push(dropElements.filter((item) => item._id === key._id))
    }
    return tagetCount.map((item) => item.length)
  }

  return (
    <div
      className={`${ingr_list_style.ing_container} ${app_style.scroll}`}
      onScroll={tabScrollChanger}
    >
      <div>
        <h2
          className={`text text_type_main-medium mb-6 ${ingr_list_style.h2}`}
          id="main_bun"
        >
          Булки
        </h2>
        <div className={ingr_list_style.wrapper}>
          {bun.map((item) => (
            <IngrItems
              key={item._id}
              price={item.price}
              image={item.image}
              name={item.name}
              id={item._id}
              dropElements={dropElements}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className={`text text_type_main-medium mb-6 ${ingr_list_style.h2}`}>
          Соусы
        </h2>
        <div className={ingr_list_style.wrapper}>
          {sauce.map((item, index) => (
            <div key={item._id}>
              <div className={ingr_list_style.counter_wrapper}>
                <Counter count={targetCounter(sauce)[index]} size="small" />
              </div>
              <IngrItems
                price={item.price}
                image={item.image}
                name={item.name}
                modalIngFn={modalIngFn}
                id={item._id}
                dropElements={dropElements}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className={`text text_type_main-medium mb-6 ${ingr_list_style.h2}`}>
          Начинки
        </h2>
        <div className={ingr_list_style.wrapper}>
          {main.map((item, index) => (
            <div key={item._id}>
              <div className={ingr_list_style.counter_wrapper}>
                <Counter count={targetCounter(main)[index]} size="small" />
              </div>
              <IngrItems
                key={item._id}
                price={item.price}
                image={item.image}
                name={item.name}
                modalIngFn={modalIngFn}
                id={item._id}
                dropElements={dropElements}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

IngrList.propTypes = {
  _id: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  modalIngFn: PropTypes.func,
  data: PropTypes.array,
  tabScrollChanger: PropTypes.func,
}
