import style from './order-form-component.module.scss'
import InputText from '../shared/input-text/input-text'
import { MainButton } from '../shared/mainButton/mainButton'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Link from 'next/link'

import InputPhone from '../shared/input-phone/input-phone'
import { useState } from 'react'
import { useRouter } from 'next/router'

const OrderFormComponent = () => {
	const router = useRouter()
	const [nameValue, setNameValue] = useState<string>('')
	const [mailValue, setMailValue] = useState<string>('')
	const [addressValue, setAddressValue] = useState<string>('')
	const [passwordValue, setPasswordValue] = useState<string>('')
	const [promoCodeValue, setPromoCodeValue] = useState<string>('')
	const [validateName, setValidateName] = useState<boolean>(true)
	const [validateMail, setValidateMail] = useState<boolean>(true)
	const [validateAddress, setValidateAddress] = useState<boolean>(true)
	const [validatePassword, setValidatePassword] = useState<boolean>(true)
	const [validatePromoCode, setValidatePromoCode] = useState<boolean>(true)


	const { cities } = useTypedSelector(cities => cities.selectedCity)
	const url = cities.reduce((acc, city) => {
		if (city.active) {
			acc = city.link
		}
		return acc
	}, '')

	const onChangeName = (e: any) => {
		setNameValue(e.target.value)
	}

	const onChangeMail = (e: any) => {
		setMailValue(e.target.value)
	}

	const onChangePass = (e: any) => {
		setPasswordValue(e.target.value)
	}

	const onChangeAddress = (e: any) => {
		setAddressValue(e.target.value)
	}

	const onChangePromo = (e: any) => {
		setPromoCodeValue(e.target.value)
	}

	function onOrderBuy(e: any) {
		debugger
		e.preventDefault()
		router.push('/')
	}

	return (
		<form className={style['order-form-component']}>
			<Link href="/">
				<a className={style['order-form-component__close']}></a>
			</Link>
			<div className={style['order-form-component__wrap']}>
				<div className={style['order-form-component__block']}>
					<div className={style['order-form-component__area-title']}>Ваши данные</div>
					<div className={style['order-form-component__inputs']}>
						<div className={style['order-form-component__input']}>
							<InputText
								value={nameValue}
								validate={validateName}
								errorMsg={'Неккоректные данные'}
								label={'Имя пользователя'}
								onChange={onChangeName}/>
						</div>
						<div className={style['order-form-component__input']}>
							<InputPhone/>
						</div>
					</div>
				</div>
				<div className={style['order-form-component__block']}>
					<div className={style['order-form-component__area-title']}>Данные для регистрации*</div>
					<div className={style['order-form-component__inputs']}>
						<div className={style['order-form-component__input']}>
							<InputText
								value={mailValue}
								errorMsg={'Неккоректные данные'}
								validate={validateMail}
								onChange={onChangeMail}
								label={'E-mail'}/>
						</div>
						<div className={style['order-form-component__input']}>
							<InputText
								value={passwordValue}
								errorMsg={'Неккоректные данные'}
								validate={validatePassword}
								onChange={onChangePass}
								label={'Пароль'}
								type={'password'}/>
						</div>
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
						<div className={style['order-form-component__input']}>
							<InputText
								value={addressValue}
								errorMsg={'Неккоректные данные'}
								validate={validateAddress}
								onChange={onChangeAddress}
								label={'Адрес'}/>
						</div>
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
						<div className={style['order-form-component__input']}>
							<InputText
								value={promoCodeValue}
								errorMsg={'Неккоректные данные'}
								validate={validatePromoCode}
								onChange={onChangePromo}
								label={'Промокод'}/>
						</div>
					</div>
				</div>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<MainButton
						className={style.main_btn_order}
						fontSize="18px"
						onClick={onOrderBuy}
					>Оформить заказ</MainButton>
				</div>
			</div>
		</form>
	)
}

export default OrderFormComponent
