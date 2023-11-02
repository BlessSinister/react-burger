import {
  CurrencyIcon,
  FormattedDate,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './orderlent.module.css'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../services/redux-hooks'
import { modalFlagOrderLent } from '../../services/reducer'
export default function Orderlent() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const hadleClick = () => {
    navigate('info')
    dispatch(modalFlagOrderLent(true))
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.h2}>Лента заказов</h2>
        <main className={styles.main}>
          <div
            className={`${styles.order_numbers_block} ${styles.scroll} mr-15`}
          >
            <div
              className={`${styles.order_compopnents_wrapper} mb-4 p-6`}
              onClick={hadleClick}
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

          <div className={`${styles.order_info_block}`}>
            <div className={`${styles.order_status_blocks_wrapper} mb-15`}>
              <div className={`${styles.order_status_ready_block} mr-9`}>
                <h3 className={`${styles.h3} mb-6`}>Готовы:</h3>
                <p className={`${styles.order_ready_number} mb-2`}>034533</p>
                <p className={`${styles.order_ready_number} mb-2`}>034532</p>
                <p className={`${styles.order_ready_number} mb-2`}>034530</p>
                <p className={`${styles.order_ready_number} mb-2`}>034527</p>
                <p className={`${styles.order_ready_number} mb-2`}>034525</p>
              </div>
              <div className={styles.order_status_process_block}>
                <h3 className={`${styles.h3} mb-6`}>В работе:</h3>
                <p className={`${styles.order_process_number} mb-2`}>034538</p>
                <p className={`${styles.order_process_number} mb-2`}>034541</p>
                <p className={`${styles.order_process_number} mb-2`}>034542</p>
              </div>
            </div>
            <h3 className={`${styles.h3} mb-6`}>Выполнено за все время:</h3>
            <p className={`${styles.all_orders_numbers} mb-15`}>28 752</p>
            <h3 className={`${styles.h3}`}>Выполнено сегодня:</h3>
            <p className={`${styles.all_orders_numbers}`}>138</p>
          </div>
        </main>
      </div>
    </div>
  )
}
