import PropTypes from 'prop-types'

let propTypes = (a) => {
  return (a.propTypes = {
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
  })
}

export default propTypes

let burgerIngrPropTypes = (a) => {
  return (a.propTypes = {
    _id: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    data: PropTypes.array,
  })
}
export { burgerIngrPropTypes }

let ingrListPropType = (a) => {
  return (a.propTypes = {
    _id: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    modalIngFn: PropTypes.func,
    data: PropTypes.array,
  })
}
export { ingrListPropType }
let ingItemsPropType = (a) => {
  return (a.propTypes = {
    _id: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    modalIngFn: PropTypes.func,
  })
}
export { ingItemsPropType }
let burgerConstructorPropTypes = (a) => {
  return (a.propTypes = {
    _id: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    data: PropTypes.array,
  })
}
export { burgerConstructorPropTypes }
let burgConstItemsPropTypes = (a) => {
  return (a.propTypes = {
    price: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    isLocked: PropTypes.bool,
    type: PropTypes.string,
    thumbnail: PropTypes.string,
    data: PropTypes.array,
  })
}
export { burgConstItemsPropTypes }

let orderDetailsPropTypes = (a) => {
  return (a.propTypes = {
    orderNumber: PropTypes.string,
  })
}
export { orderDetailsPropTypes }

let ingredientDetailsPropTypes = (a) => {
  return (a.propTypes = {
    data: PropTypes.array,
  })
}
export { ingredientDetailsPropTypes }
