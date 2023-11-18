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
