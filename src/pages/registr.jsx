import React, { useRef, useState } from 'react'
import styles from './registr.module.css'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import { registrUserFn } from '../services/actions'
export default function Registr() {
  const [value, setValue] = useState('')
  const [pass, setPass] = useState('')
  const [email, setEmail] = useState('')
  const inputRef = useRef(null)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={`${styles.h2} mb-6`}>Регистрация</h2>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => setValue(e.target.value)}
          value={value}
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
          name={'name'}
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
          onClick={registrUserFn()}
        >
          Зарегистрироваться
        </Button>
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
