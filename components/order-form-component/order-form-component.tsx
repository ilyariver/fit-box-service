import style from './order-form-component.module.scss'
import InputText from '../calculator-component/input-text/input-text'
import { MainButton } from '../shared/mainButton/mainButton'
import { cities } from '../../mockDate'

const OrderFormComponent = () => {

	return (
		<form className={style['order-form-component']}>
			<div className={style['order-form-component__wrap']}>
				<div className={style['order-form-component__block']}>
					<div className={style['order-form-component__area-title']}>Ваши данные</div>
					<div className={style['order-form-component__inputs']}>
						<InputText label={'Имя пользователя'}/>
						<InputText label={'E-mail'}/>
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
				<MainButton className={style.main_btn} width="100%" fontSize="14px" pink={false}>Добавить новый адрес доставки</MainButton>
				<div className={`${style['order-form-component__block']} ${style['order-form-component__block--inputs']}`}>
					<div className={style['order-form-component__inputs']}>
						<input className={style['date']} type="date" />
						<div className={style['selects']}>
							<select className={`${style['select']} ${style['select_time']}`}>
								<option value="">Время</option>
								{ Array.from(Array(24).keys()).map(button => {
									return <option key={button} value={button++}>{button++}</option>
								}) }
							</select>
							<select className={`${style['select']} ${style['select_time']}`}>
								<option value=""> </option>
								{ Array.from(Array(60).keys()).map(button => {
									return <option key={button} value={button++}>{button++}</option>
								}) }
							</select>
						</div>
					</div>
				</div>
				<div className={`${style['order-form-component__block']} ${style['order-form-component__block--date']}`}>
					<div className={`${style['order-form-component__area-title']} ${style['order-form-component__area-title--pay']}`}>Оплата</div>
					<MainButton className={style.main_btn_pay} width="100%" fontSize="14px" pink={false}>Картой онлайн</MainButton>
				</div>
				<div className={style['order-form-component__promocode']}>
					<div className={`${style['order-form-component__area-title']} ${style['order-form-component__area-title--promocode']}`}>Промокод</div>
					<div className={style['order-form-component__inputs']}>
						<InputText inlineStyle={{ width: '100%' }} label={''}/>
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
