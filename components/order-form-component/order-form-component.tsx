import React from 'react'
import style from './order-form-component.module.scss'
import InputText from '../calculator-component/input-text/input-text'
import { MainButton } from '../shared/mainButton/mainButton'
import { declOfNum } from '../shared/declOfNum/declOfNum'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { cities } from '../../mockDate'

const OrderFormComponent = () => {
	const { programs, optionsBtns } = useTypedSelector(plan => plan.program)
	// const programss = useTypedSelector(plan => plan)

	console.log(cities)
	return (
		<form className={style['order-form-component']}>
			<div className={style['order-form-component__wrap']}>
				<div className={style['order-form-component__block']}>
					<div className={style['order-form-component__area-title']}>Ваши данные</div>
					<div className={style['order-form-component__inputs']}>
						<InputText inlineStyle={{ width: '220px' }} label={'Имя пользователя'}/>
						<InputText inlineStyle={{ width: '220px' }} label={'E-mail'}/>
					</div>
				</div>
				<div className={`${style['order-form-component__plan']} ${style['order-form-component__block']}`}>
					<div>
						<div className={style['order-form-component__area-title']}>Программа</div>
						<div className={style['order-form-component__inputs']}>
							<div style={{ width: '220px' }}>
								<select className={style['select']} style={{ width: '220px' }}>
									{ programs.map(plan => <option key={plan.id} value={plan.type.title}>{plan.type.title}</option>) }
								</select>
							</div>
						</div>
					</div>
					<div>
						<div className={style['order-form-component__area-title']}>Длительность</div>
						<div className={style['order-form-component__inputs']}>
							<select className={style['select']} style={{ width: '220px' }}>
								{ optionsBtns.map(button => <option
									key={button.number}
									value={button.number}>{button.number} {declOfNum(button.number, ['день', 'дня', 'дней'])}</option>) }
							</select>
						</div>
					</div>
				</div>
				<div className={style['order-form-component__address']}>
					<div className={style['order-form-component__area-title']}>Адрес доставки</div>
					<select className={style['select']} style={{ width: '100%' }}>
						{ cities.map(button => <option
							key={button.id}
							value={button.title}>{button.title}</option>) }
					</select>
				</div>
				<MainButton width="100%" fontSize="14px" pink={false} bottom="50px">Добавить новый адрес доставки</MainButton>
				<div className={style['order-form-component__block']}>
					<div className={style['order-form-component__inputs']}>
						<input className={style['date']} type="date" style={{ width: '220px' }} />
						<select className={style['select']} style={{ width: '140px' }}>
							<option value="">Время</option>
							{ Array.from(Array(24).keys()).map(button => {
								return <option key={button} value={button++}>{button++}</option>
							}) }
						</select>
						<select className={style['select']} style={{ width: '140px' }}>
							<option value=""></option>
							{ Array.from(Array(60).keys()).map(button => {
								return <option key={button} value={button++}>{button++}</option>
							}) }
						</select>
					</div>
				</div>
				<div className={style['order-form-component__block']}>
					<div className={style['order-form-component__area-title']}>Оплата</div>
					<MainButton width="100%" fontSize="14px" pink={false}>Картой онлайн</MainButton>
				</div>
				<div className={style['order-form-component__promocode']}>
					<div className={style['order-form-component__area-title']}>Промокод</div>
					<div className={style['order-form-component__inputs']}>
						<InputText inlineStyle={{ width: '100%' }} label={''}/>
					</div>
				</div>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<MainButton width="370px" fontSize="18px" >Оформить заказ</MainButton>
				</div>
			</div>
		</form>
	)
}

export default OrderFormComponent
