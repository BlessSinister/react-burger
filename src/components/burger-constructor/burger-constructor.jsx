import const_style from './burger-constructor.module.css'
import BurgConstItems from '../burger-constructor-items/burg-const-items'
import ZakazInfo from '../zakaz-info/zakaz-info'
export default function BurgerConstructor({ data }) {
  return (
    <section className={`${const_style.wrapper} mt-25`}>
      <BurgConstItems data={data} />
      <ZakazInfo />
    </section>
  )
}
