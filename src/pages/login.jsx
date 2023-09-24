import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useRef, useState } from 'react'
import styles from './login.module.css'
import { NavLink } from 'react-router-dom'
export default function Login() {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }
  const [pass, setPass] = useState('password')

  return (
    <div className={styles.login_container}>
      <div className={styles.login_wrapper}>
        <h2>Вход</h2>
        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={(e) => setValue(e.target.value)}
          name={'name'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass="mt-6"
          value={value}
        />
        <PasswordInput
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          name={'password'}
          extraClass="mt-6 mb-6"
        />
        <Button htmlType="button" type="primary" size="medium">
          Войти
        </Button>
        <p className="mt-20 mb-4">
          Вы — новый пользователь?{' '}
          <NavLink to="123" className={styles.link}>
            Зарегистрироваться
          </NavLink>
        </p>
        <p>
          Забыли пароль?{' '}
          <NavLink to="123" className={styles.link}>
            Восстановить пароль
          </NavLink>
        </p>
      </div>
    </div>
  )
}
