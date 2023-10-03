import { useDispatch, useSelector } from 'react-redux'
import style from './ingredient-details.module.css'
import { refreshModalState } from '../../services/reducer'
import { useEffect } from 'react'
export default function IngredientDetails() {
  const dispatch = useDispatch()
  let data = useSelector((state) => state.currentIngridient)

  const data1 = useSelector((state) => state.inst)
  console.log(data1)
  if (data.length === 0) {
    return null
  }

  return data.length ? (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${style.flex_container} p-10 pb-15`}
    >
      <div className={`${style.decor_wrapper_icon} mb-4`}>
        <h2 className={style.h2}>Детали ингредиента</h2>
      </div>
      <div className={`${style.main_card_img} mb-4`}>
        <img src={data[0].image_large} className={style.img} alt="" />
      </div>
      <p className={`${style.p_item1} mb-8`}>{data[0].name}</p>
      <div className={`${style.protein_container}`}>
        <div className={style.decor_protein_wrapper}>
          <p className={`${style.p_protein} mb-2`}>Калории,ккал</p>
          <p className={`${style.p_protein_info}`}>{data[0].calories}</p>
        </div>
        <div className={style.decor_protein_wrapper}>
          <p className={`${style.p_protein} mb-2`}>Белки, г</p>
          <p className={`${style.p_protein_info}`}>{data[0].proteins}</p>
        </div>
        <div className={style.decor_protein_wrapper}>
          <p className={`${style.p_protein} mb-2`}>Жиры, г</p>
          <p className={`${style.p_protein_info}`}>{data[0].fat}</p>
        </div>
        <div className={style.decor_protein_wrapper}>
          <p className={`${style.p_protein} mb-2`}>Углеводы, г</p>
          <p className={`${style.p_protein_info}`}>{data[0].carbohydrates}</p>
        </div>
      </div>
    </div>
  ) : (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${style.flex_container} p-10 pb-15`}
    >
      <div className={`${style.decor_wrapper_icon} mb-4`}>
        <h2 className={style.h2}>Детали ингредиента</h2>
      </div>
      <div className={`${style.main_card_img} mb-4`}>
        <img src={data1[0].image_large} className={style.img} alt="" />
      </div>
      <p className={`${style.p_item1} mb-8`}>{data1[0].name}</p>
      <div className={`${style.protein_container}`}>
        <div className={style.decor_protein_wrapper}>
          <p className={`${style.p_protein} mb-2`}>Калории,ккал</p>
          <p className={`${style.p_protein_info}`}>{data1[0].calories}</p>
        </div>
        <div className={style.decor_protein_wrapper}>
          <p className={`${style.p_protein} mb-2`}>Белки, г</p>
          <p className={`${style.p_protein_info}`}>{data1[0].proteins}</p>
        </div>
        <div className={style.decor_protein_wrapper}>
          <p className={`${style.p_protein} mb-2`}>Жиры, г</p>
          <p className={`${style.p_protein_info}`}>{data1[0].fat}</p>
        </div>
        <div className={style.decor_protein_wrapper}>
          <p className={`${style.p_protein} mb-2`}>Углеводы, г</p>
          <p className={`${style.p_protein_info}`}>{data1[0].carbohydrates}</p>
        </div>
      </div>
    </div>
  )
}
