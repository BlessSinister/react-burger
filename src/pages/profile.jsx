import React, { useRef, useState, useEffect } from 'react'
import styles from './profile.module.css'
import {
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUserFn } from '../services/actions'

export default function Profile() {
  const [value, setValue] = useState('Марк')
  const [email, setEmail] = useState('mail@stellar.burgers')
  const [pass, setPass] = useState('password')
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const redirect = useSelector((state) => state.authUser)
  useEffect(() => {
    if (!redirect) {
      navigate('/login')
    }
  })
  return (
    <div className={styles.container}>
      <div className={`${styles.wrapper_navigation} mt-30`}>
        <NavLink to="/profile" className={styles.link}>
          <p className={`${styles.p} ${styles.active}`}>Профиль</p>
        </NavLink>
        <NavLink to="/profile/orders" className={styles.link}>
          <p className={`${styles.p}`}>История заказов</p>
        </NavLink>
        <NavLink
          to="/profile"
          className={styles.link}
          onClick={() => dispatch(logoutUserFn())}
        >
          <p className={`${styles.p} mb-20`}>Выход</p>
        </NavLink>
        <p className={styles.caption}>
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={`${styles.wrapper_edit} mt-30 ml-95`}>
        <EmailInput
          onChange={(e) => setValue(e.target.value)}
          value={value}
          name={'email'}
          placeholder="Имя"
          isIcon={true}
          extraClass="mb-6"
        />
        <EmailInput
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={'email'}
          placeholder="Логин"
          isIcon={true}
          extraClass="mb-6"
        />
        <PasswordInput
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          name={'password'}
          icon="EditIcon"
        />
      </div>
    </div>
  )
}
