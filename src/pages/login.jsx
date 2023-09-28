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
  const [email, setEmail] = useState('')
  const inputRef = useRef(null)
  const [pass, setPass] = useState('')
  const dispatch = useDispatch()
  const redirect = useSelector((state) => state.authUser.success)
  const navigate = useNavigate()
  useEffect(() => {
    if (redirect) {
      navigate('/profile')
    }
  }, [redirect])
  const handleSbubmit = (e) => {
    e.preventDefault()
    dispatch(loginUserFn(email, pass))
  }
  return (
    <div className={styles.login_container}>
      <div className={styles.login_wrapper}>
        <form onSubmit={handleSbubmit}>
          <h2 className={`${styles.h2}`}>Вход</h2>
          <Input
            type={'text'}
            placeholder={'E-mail'}
            onChange={(e) => setEmail(e.target.value)}
            name={'name'}
            error={false}
            ref={inputRef}
            errorText={'Ошибка'}
            size={'default'}
            extraClass="mt-6"
            value={email}
          />
          <PasswordInput
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            extraClass="mt-6 mb-6"
          />
          <Button
            htmlType="button"
            type="primary"
            size="medium"
            onClick={() => dispatch(loginUserFn(email, pass))}
          >
            Войти
          </Button>
        </form>
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
      </div>
    </div>
  )
}
