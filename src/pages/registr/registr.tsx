import React, { useRef, useState, useEffect } from 'react'
import styles from './registr.module.css'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useNavigate } from 'react-router-dom'
import { registrUserFn } from '../../services/actions'
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'

export default function Registr() {
  const [name, setName] = useState<string>('')
  const [pass, setPass] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const dispatch = useAppDispatch()
  const inputRef = useRef(null)

  const redirect = useAppSelector((state) => state.registerAcc)
  const navigate = useNavigate()
  useEffect(() => {
    if (redirect) {
      navigate('/')
    }
  }, [redirect])
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={`${styles.h2} mb-6`}>Регистрация</h2>
        <form action="#" method="post">
          <Input
            type={'text'}
            placeholder={'Имя'}
            onChange={(e) => setName(e.target.value)}
            value={name}
            name={'name'}
            error={false}
            ref={inputRef}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mb-6"
          />
          <Input
            type={'text'}
            placeholder={'E-mail'}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name={'email'}
            error={false}
            ref={inputRef}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mb-6"
          />
          <PasswordInput
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            name={'password'}
            extraClass="mb-6"
            placeholder="Пароль"
          />
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={() => dispatch(registrUserFn(email, pass, name))}
          >
            Зарегистрироваться
          </Button>
        </form>
        <p className={`${styles.p} mt-20`}>
          Уже зарегистрированы?{' '}
          <Link to="/login" className={`${styles.link}`}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  )
}
