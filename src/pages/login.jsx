import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { useRef, useState, useEffect } from 'react'
import styles from './login.module.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { loginUserFn } from '../services/actions'
import { useDispatch, useSelector } from 'react-redux'
export default function Login() {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }
  const [pass, setPass] = useState('password')
  const dispatch = useDispatch()
  const redirect = useSelector((state) => state.authUser)
  const navigate = useNavigate()
  useEffect(() => {
    if (redirect) {
      navigate('/profile')
    }
  }, [redirect])
  return (
    <div className={styles.login_container}>
      <div className={styles.login_wrapper}>
        <form action="submit">
          <h2 className={`${styles.h2}`}>Вход</h2>
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
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={() => dispatch(loginUserFn())}
          >
            Войти
          </Button>
          <p className={`${styles.p} mt-20 mb-4`}>
            Вы — новый пользователь?{' '}
            <NavLink to="/registr" className={styles.link}>
              Зарегистрироваться
            </NavLink>
          </p>
          <p className={`${styles.p} `}>
            Забыли пароль?{' '}
            <NavLink to="/forgotpass" className={styles.link}>
              Восстановить пароль
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  )
}
