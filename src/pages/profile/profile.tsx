import React, { useRef, useState, useEffect } from 'react'
import styles from './profile.module.css'
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { NavLink, useNavigate } from 'react-router-dom'

import {
  getProfileOrderLentInfo,
  logoutUserFn,
  setProfileInfo,
} from '../../services/actions'
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'

export default function Profile() {
  const name = useAppSelector((state) => state.initialProfileInfo.name)

  const password = useAppSelector((state) => state.initialProfileInfo.password)

  const emailState = useAppSelector((state) => state.initialProfileInfo.email)

  const editName = useAppSelector((state) => state.mainProfileInfo[0].name)

  const editPass = useAppSelector((state) => state.mainProfileInfo[0].password)

  const editEmail = useAppSelector((state) => state.mainProfileInfo[0].email)
  const [value, setValue] = useState<string>(name)
  const [email, setEmail] = useState<string>(emailState)
  const [pass, setPass] = useState<string>(password)
  const navigate = useNavigate()
  const restoreProfileFn = (): void => {
    setValue(name)
    setEmail(emailState)
    setPass(password)
  }

  useEffect(() => {
    setValue(editName)
    setPass(editPass)
    setEmail(editEmail)
    localStorage.getItem('accessToken') ? navigate('/profile') : navigate('/')
  }, [editEmail, editName, editPass, navigate])
  const dispatch = useAppDispatch()

  let handleSubmitForm = (event: React.FormEvent<HTMLInputElement>) => {
    dispatch(setProfileInfo(value, pass, email))
    event.preventDefault()
  }

  useEffect(() => {
    dispatch(getProfileOrderLentInfo())
  }, [])
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
        <form
          //@ts-ignore
          onSubmit={handleSubmitForm}
        >
          <Input
            onChange={(e) => setValue(e.target.value)}
            value={value}
            name="name"
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
            onClick={restoreProfileFn}
          >
            Отменить
          </Button>
        </form>
      </div>
    </div>
  )
}
