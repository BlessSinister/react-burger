import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './orders.module.css'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../services/redux-hooks'
import { modalFlagProfileOrderLent } from '../../services/reducer'
export default function Orders() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleClick = () => {
    navigate('/profile/orders/1')
    dispatch(modalFlagProfileOrderLent(true))
  }
  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.navigate_wrapper} mr-15`}>
          <div className={`${styles.navigate_wrapper_block1} mb-20`}>
            <div className={`${styles.navigate_item}`}>Профиль</div>
            <div className={`${styles.navigate_item}`}>История заказов</div>
            <div className={`${styles.navigate_item}`}>Выход</div>
          </div>
          <div className={`${styles.navigate_wrapper_block2}`}>
            В этом разделе вы можете <br /> просмотреть свою историю заказов
          </div>
        </div>
        <div className={`${styles.order_numbers_block} ${styles.scroll} `}>
          <div
            className={`${styles.order_compopnents_wrapper} mb-4 p-6`}
            onClick={handleClick}
          >
            <div className={`${styles.title_wrapper} mb-6`}>
              <p>#034535</p>
              <FormattedDate date={new Date('2023-11-01')} />
            </div>
            <p className={`${styles.title_burger} mb-6`}>
              Death Star Starship Main бургер
            </p>
            <div className={styles.ingridients_wrapper}>
              <div className={`${styles.ingridients_container} mr-6`}>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container1}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img5}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container2}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img4}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container3}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img3}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container4}`}
                >
                  <div className={`${styles.ingridient_item_img}`}></div>
                </div>
                <div className={`${styles.ingridient_item_container}`}>
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img1}`}
                  ></div>
                </div>
              </div>

              <div className={`${styles.ingridients_price_container}`}>
                <p className={`${styles.ingridients_price} mr-2`}>480</p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </div>
          <div className={`${styles.order_compopnents_wrapper} mb-4 p-6`}>
            <div className={`${styles.title_wrapper} mb-6`}>
              <p>#034535</p>
              <FormattedDate date={new Date('2023-11-01')} />
            </div>
            <p className={`${styles.title_burger} mb-6`}>
              Death Star Starship Main бургер
            </p>
            <div className={styles.ingridients_wrapper}>
              <div className={`${styles.ingridients_container} mr-6`}>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container1}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img5}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container2}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img4}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container3}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img3}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container4}`}
                >
                  <div className={`${styles.ingridient_item_img}`}></div>
                </div>
                <div className={`${styles.ingridient_item_container}`}>
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img1}`}
                  ></div>
                </div>
              </div>

              <div className={`${styles.ingridients_price_container}`}>
                <p className={`${styles.ingridients_price} mr-2`}>480</p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </div>
          <div className={`${styles.order_compopnents_wrapper} mb-4 p-6`}>
            <div className={`${styles.title_wrapper} mb-6`}>
              <p>#034535</p>
              <FormattedDate date={new Date('2023-11-01')} />
            </div>
            <p className={`${styles.title_burger} mb-6`}>
              Death Star Starship Main бургер
            </p>
            <div className={styles.ingridients_wrapper}>
              <div className={`${styles.ingridients_container} mr-6`}>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container1}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img5}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container2}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img4}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container3}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img3}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container4}`}
                >
                  <div className={`${styles.ingridient_item_img}`}></div>
                </div>
                <div className={`${styles.ingridient_item_container}`}>
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img1}`}
                  ></div>
                </div>
              </div>

              <div className={`${styles.ingridients_price_container}`}>
                <p className={`${styles.ingridients_price} mr-2`}>480</p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </div>
          <div className={`${styles.order_compopnents_wrapper} mb-4 p-6`}>
            <div className={`${styles.title_wrapper} mb-6`}>
              <p>#034535</p>
              <FormattedDate date={new Date('2023-11-01')} />
            </div>
            <p className={`${styles.title_burger} mb-6`}>
              Death Star Starship Main бургер
            </p>
            <div className={styles.ingridients_wrapper}>
              <div className={`${styles.ingridients_container} mr-6`}>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container1}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img5}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container2}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img4}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container3}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img3}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container4}`}
                >
                  <div className={`${styles.ingridient_item_img}`}></div>
                </div>
                <div className={`${styles.ingridient_item_container}`}>
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img1}`}
                  ></div>
                </div>
              </div>

              <div className={`${styles.ingridients_price_container}`}>
                <p className={`${styles.ingridients_price} mr-2`}>480</p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </div>
          <div className={`${styles.order_compopnents_wrapper} mb-4 p-6`}>
            <div className={`${styles.title_wrapper} mb-6`}>
              <p>#034535</p>
              <FormattedDate date={new Date('2023-11-01')} />
            </div>
            <p className={`${styles.title_burger} mb-6`}>
              Death Star Starship Main бургер
            </p>
            <div className={styles.ingridients_wrapper}>
              <div className={`${styles.ingridients_container} mr-6`}>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container1}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img5}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container2}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img4}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container3}`}
                >
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img3}`}
                  ></div>
                </div>
                <div
                  className={`${styles.ingridient_item_container} ${styles.ingridient_item_container4}`}
                >
                  <div className={`${styles.ingridient_item_img}`}></div>
                </div>
                <div className={`${styles.ingridient_item_container}`}>
                  <div
                    className={`${styles.ingridient_item_img} ${styles.ingridient_item_img1}`}
                  ></div>
                </div>
              </div>

              <div className={`${styles.ingridients_price_container}`}>
                <p className={`${styles.ingridients_price} mr-2`}>480</p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
