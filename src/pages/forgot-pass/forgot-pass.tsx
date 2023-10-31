import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './forgot-pass.module.css'
import { useRef, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { forgotPassFn } from '../../services/actions'
import { useAppDispatch, useAppSelector } from '../../services/redux-hooks'

export default function ForgotPass() {
  const [email, setEmail] = useState<string>('')
  const dispatch = useAppDispatch()
  const inputRef = useRef(null)

  const redirect = useAppSelector((state) => state.forgotPass)
  const navigate = useNavigate()
  useEffect(() => {
    if (redirect) {
      navigate('/resetpass')
    }
  }, [redirect])
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={`${styles.h2} mb-6`}>Восстановление пароля</h2>

        <Input
          type={'text'}
          placeholder={'Укажите e-mail'}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
          onClick={() =>
            email.length
              ? dispatch(forgotPassFn(email))
              : alert('Введите имеил')
          }
        >
          Восстановить
        </Button>
        <p className={`${styles.p} mt-20`}>
          Вспомнили пароль?{' '}
          <Link to="/login" className={`${styles.link}`}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  )
}
