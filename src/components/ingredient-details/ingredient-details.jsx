import style from './ingredient-details.module.css'
import { ingredientDetailsPropTypes } from '../../utils/props-types'
import { CustomContext } from '../hooks/context'
import React, { useContext } from 'react'
export default function IngredientDetails({ data }) {
  const { idElem } = useContext(CustomContext)

  let arr = data.filter((item) => item._id === idElem)

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${style.flex_container} p-10 pb-15`}
    >
      <div className={`${style.main_card_img} mb-4`}>
        <img src={arr[0].image_large} className={style.img} alt="" />
      </div>
      <p className={`${style.p_item1} mb-8`}>{arr[0].name}</p>
      <div className={`${style.protein_container}`}>
        <div className={style.decor_protein_wrapper}>
          <p className={`${style.p_protein} mb-2`}>Калории,ккал</p>
          <p className={`${style.p_protein_info}`}>{arr[0].calories}</p>
        </div>
        <div className={style.decor_protein_wrapper}>
          <p className={`${style.p_protein} mb-2`}>Белки, г</p>
          <p className={`${style.p_protein_info}`}>{arr[0].proteins}</p>
        </div>
        <div className={style.decor_protein_wrapper}>
          <p className={`${style.p_protein} mb-2`}>Жиры, г</p>
          <p className={`${style.p_protein_info}`}>{arr[0].fat}</p>
        </div>
        <div className={style.decor_protein_wrapper}>
          <p className={`${style.p_protein} mb-2`}>Углеводы, г</p>
          <p className={`${style.p_protein_info}`}>{arr[0].carbohydrates}</p>
        </div>
      </div>
    </div>
  )
}
ingredientDetailsPropTypes(IngredientDetails)
