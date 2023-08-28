import React from 'react'
import tabs_style from './tabs.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
const Tabs = () => {
  const [current, setCurrent] = React.useState('one')
  return (
    <div className={`mb-10 ${tabs_style.tabs_wrapper}`}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  )
}

export default Tabs
