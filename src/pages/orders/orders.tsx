import styles from './orders.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'
import { modalFlagProfileOrderLent } from '../../services/reducer'
import { logoutUserFn } from '../../services/actions'
import OrderProfileItem from './order-profile-item'

export default function Orders() {
  const navigate = useNavigate()
  const modal = useAppSelector((state) => state.modalProfileOrderLentFlag)
  let orderLent = useAppSelector((state) => state.profileOrderLentState)
  const dispatch = useAppDispatch()

  const handleClick = () => {
    if (modal) {
      //@ts-ignore
      window.history.pushState(
        null,
        //@ts-ignore
        null,
        `/profile/order/${localStorage.getItem('orderLentIdElem')}`
      )
    }
    dispatch(modalFlagProfileOrderLent(true))
    navigate(`/profile/orders/${localStorage.getItem('orderLentIdElem')}`)
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.navigate_wrapper} mr-15`}>
          <div className={`${styles.navigate_wrapper_block1} mb-20`}>
            <NavLink to="/profile" className={styles.link}>
              <p className={`${styles.navigate_item}`}>Профиль</p>
            </NavLink>
            <NavLink to="/profile" className={styles.link}>
              <p className={`${styles.navigate_item} ${styles.active}`}>
                История заказов
              </p>
            </NavLink>

            <NavLink
              to="/profile"
              className={styles.link}
              onClick={() => dispatch(logoutUserFn())}
            >
              <p className={`${styles.navigate_item} mb-20`}>Выход</p>
            </NavLink>
          </div>
          <div className={`${styles.navigate_wrapper_block2}`}>
            В этом разделе вы можете <br /> просмотреть свою историю заказов
          </div>
        </div>
        <div className={`${styles.order_numbers_block} ${styles.scroll} `}>
          {orderLent.orders.map((item) => (
            <OrderProfileItem
              handleClick={handleClick}
              number={item.number}
              createdAt={item.createdAt}
              name={item.name}
              ingredients={item.ingredients}
              status={item.status}
              id={item._id}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
