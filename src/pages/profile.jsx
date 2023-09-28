import React, { useRef, useState, useEffect } from 'react'
import styles from './profile.module.css'
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  logoutUserFn,
  setProfileInfo,
  setProfileInfoDefault,
} from '../services/actions'

export default function Profile() {
  const name = useSelector((state) => state.initialProfileInfo.name)
  const password = useSelector((state) => state.initialProfileInfo.password)
  const emailState = useSelector((state) => state.initialProfileInfo.email)
  const editName = useSelector((state) => state.mainProfileInfo[0].name)
  const editPass = useSelector((state) => state.mainProfileInfo[0].password)
  const editEmail = useSelector((state) => state.mainProfileInfo[0].email)
  const [value, setValue] = useState(name)
  const [email, setEmail] = useState(emailState)
  const [pass, setPass] = useState(password)
  useEffect(() => {
    setValue(editName)
    setPass(editPass)
    setEmail(editEmail)
  }, [editEmail, editName, editPass])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const redirect = useSelector((state) => state.authUser)
  useEffect(() => {
    if (!redirect) {
      navigate('/login')
    }
  }, [redirect])
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
        <Input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="Имя"
          icon="EditIcon"
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
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass="mt-6"
          onClick={() => dispatch(setProfileInfo(value, pass, email))}
        >
          Сохранить
        </Button>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass="mt-6"
          onClick={() => dispatch(setProfileInfoDefault(pass))}
        >
          Отменить
        </Button>
      </div>
    </div>
  )
}
