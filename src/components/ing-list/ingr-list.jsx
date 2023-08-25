import IngrItems from '../ingr-items/ingr-items'
import ingr_list_style from './ingr-list.module.css'
import app_style from '../app/app.module.css'
import PropTypes from 'prop-types'

export default function IngrList({ data }) {
  let bun = data.filter((item) => item.type === 'bun')
  let sauce = data.filter((item) => item.type === 'sauce')
  let main = data.filter((item) => item.type === 'main')
  return (
    <div className={`${ingr_list_style.ing_container} ${app_style.scroll}`}>
      <div>
        <h2 className={`text text_type_main-medium mb-6`}>Булки</h2>
        <div className={ingr_list_style.wrapper}>
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
        <div className={ingr_list_style.wrapper}>
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
        <div className={ingr_list_style.wrapper}>
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
IngrList.propTypes = {
  _id: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
}
