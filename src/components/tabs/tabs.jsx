import React from 'react'
import Tab from '../tab/tab'
import tabs from './tabs.module.css'
export default function Tabs() {
  const [current, setCurrent] = React.useState('one')

  return (
    <div style={{ display: 'flex' }} className={`mb-10 ${tabs.tabs_wrapper}`}>
      <Tab
        value="one"
        active={current === 'one'}
        onClick={setCurrent}
        name="Булки"
      ></Tab>
      <Tab
        value="two"
        active={current === 'two'}
        onClick={setCurrent}
        name="Соусы"
      >
        Two
      </Tab>
      <Tab
        value="three"
        active={current === 'three'}
        onClick={setCurrent}
        name="Новинки"
      >
        Three
      </Tab>
    </div>
  )
}
