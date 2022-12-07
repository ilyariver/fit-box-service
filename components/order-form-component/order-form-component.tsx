import style from './order-form-component.module.scss'
import InputText from '../shared/input-text/input-text'
import { MainButton } from '../shared/mainButton/mainButton'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Link from 'next/link'
import InputPhone from '../shared/input-phone/input-phone'

const OrderFormComponent = () => {
	const { cities } = useTypedSelector(cities => cities.selectedCity)
	const url = cities.reduce((acc, city) => {
		if (city.active) {
			acc = city.link
		}
		return acc
	}, '')
	console.log('url', url)
	console.log('cities', cities)
	return (
		<form className={style['order-form-component']}>
			<Link href={'/city/' + url}>
				<a className={style['order-form-component__close']}></a>
			</Link>
			<div className={style['order-form-component__wrap']}>
				<div className={style['order-form-component__block']}>
					<div className={style['order-form-component__area-title']}>Ваши данные</div>
					<div className={style['order-form-component__inputs']}>
						<InputText label={'Имя пользователя'} className={style['order-form-component__input']}/>
						<InputPhone className={style['order-form-component__input']}/>
					</div>
				</div>
				<div className={style['order-form-component__block']}>
					<div className={style['order-form-component__area-title']}>Данные для регистрации*</div>
					<div className={style['order-form-component__inputs']}>
						<InputText label={'E-mail'} className={style['order-form-component__input']}/>
						<InputText label={'Пароль'} className={style['order-form-component__input']} type={'password'}/>
					</div>
				</div>
				<div className={style['order-form-component__block']}>
					<div className={style['order-form-component__area-title']}>Адрес доставки</div>
					<div className={style['order-form-component__inputs']}>
						<select className={style['select']}>
							{ cities.map(button => <option
								key={button.id}
								value={button.title}>{button.title}</option>) }
						</select>
						<InputText label={'Адрес'} className={style['order-form-component__input']}/>
					</div>
				</div>
				<MainButton className={style.main_btn} width="100%" fontSize="14px" pink={false}>Добавить новый адрес доставки</MainButton>
				<div className={`${style['order-form-component__block']} ${style['order-form-component__block--inputs']}`}>
					<div className={style['order-form-component__inputs']}>
						<input className={style['date']} type="date" />
					</div>
				</div>
				<div className={style['order-form-component__block']}>
					<div className={style['order-form-component__area-title']}>Оплата</div>
					<div className={style['order-form-component__inputs']}>
						<select className={style['select']}>
							<option value="online">Картой онлайн</option>
							<option value="cash">Наличные</option>
						</select>
						<InputText label={'Промокод'} className={style['order-form-component__input']}/>
					</div>
				</div>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<MainButton className={style.main_btn_order} fontSize="18px" >Оформить заказ</MainButton>
				</div>
			</div>
		</form>
	)
}

export default OrderFormComponent
