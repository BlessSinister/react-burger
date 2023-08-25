import const_style from './burger-constructor.module.css'
import BurgConstItems from '../burger-constructor-items/burg-const-items'
import ZakazInfo from '../zakaz-info/zakaz-info'
import PropTypes from 'prop-types'
export default function BurgerConstructor({ data }) {
  return (
    <section className={`${const_style.wrapper} mt-25`}>
      <BurgConstItems data={data} />
      <ZakazInfo />
    </section>
  )
}

BurgerConstructor.propTypes = {
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
