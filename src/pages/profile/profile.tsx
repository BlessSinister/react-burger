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
import { logoutUserFn, setProfileInfo } from '../../services/actions'
import { useAppDispatch } from '../../services/redux-hooks'

export default function Profile() {
  //@ts-ignore
  const name = useSelector((state) => state.initialProfileInfo.name)
  //@ts-ignore
  const password = useSelector((state) => state.initialProfileInfo.password)
  //@ts-ignore
  const emailState = useSelector((state) => state.initialProfileInfo.email)
  //@ts-ignore
  const editName = useSelector((state) => state.mainProfileInfo[0].name)
  //@ts-ignore
  const editPass = useSelector((state) => state.mainProfileInfo[0].password)
  //@ts-ignore
  const editEmail = useSelector((state) => state.mainProfileInfo[0].email)
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
