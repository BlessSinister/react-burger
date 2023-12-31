import tabs_style from './tabs.module.css'
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'

interface Itab {
  current: string
  tabChanger: () => void
}

const Tabs = ({ tabChanger, current }: Itab) => {
  return (
    <div className={`mb-10 ${tabs_style.tabs_wrapper}`}>
      <Tab value="one" active={current === 'one'} onClick={tabChanger}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={tabChanger}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={tabChanger}>
        Начинки
      </Tab>
    </div>
  )
}

export default Tabs
