import React, { useRef, useState } from 'react'
import styles from './forgot-pass.module.css'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { Link } from 'react-router-dom'
import { resetPassFn } from '../services/actions'
export default function ResetPass() {
  const [pass, setPass] = useState()
  const [token, setToken] = useState(localStorage.getItem('accessToken'))
  console.log(token)
  const inputRef = useRef(null)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper_step_2}>
        <h2 className={`mb-6 ${styles.h2}`}>Восстановление пароля</h2>
        <PasswordInput
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          name={'password'}
          extraClass="mb-6"
          placeholder="Введите новый пароль"
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          onChange={(e) => setToken(localStorage.getItem('accessToken'))}
          value={token}
          name={'name'}
          error={false}
          ref={inputRef}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mb-6"
        />
        <Button
          htmlType="button"
          type="primary"
          size="medium"
          onClick={resetPassFn(`${'pass'}`, token)}
        >
          Сохранить
        </Button>
        <p className={`mt-20 ${styles.p}`}>
          Вспомнили пароль?{' '}
          <Link to="/login" className={`${styles.link}`}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  )
}
