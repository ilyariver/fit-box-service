import React, { FC, useState } from 'react'
import style from './input-phone.module.scss'
import { InputTextTypes } from '../../../types/inputTextTypes'
import Input from 'react-phone-number-input/input'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useActions } from '../../../hooks/useAction'

const InputPhone: FC<InputTextTypes> = ({className}) => {
	const INTERNATIONAL_RU_CODE: string = '+7'
	const NUMBER_DIGITS_IN_RU_PHONE: number = 12

	const {
		activeLoginContent,
		activeEnterSMSContent
	} = useTypedSelector(modal => modal.dialogModals)
	const {
		loginContentActive,
		getPhoneNumberActive,
		enterSMSContentActive
	} = useActions()
	const [phoneValidate, setPhoneValidate] = useState<boolean>(false)
	const [phone, setPhone] = useState<string>(INTERNATIONAL_RU_CODE)

	function handleSubmit(event: any = null): void {
		event && event.preventDefault()

		const data = {
			phone,
		}

		if (
			data.phone.length <= NUMBER_DIGITS_IN_RU_PHONE &&
			NUMBER_DIGITS_IN_RU_PHONE < data.phone.length) {
			setPhoneValidate(true)
		} else {
			setPhoneValidate(false)
			setPhone(INTERNATIONAL_RU_CODE)
			getPhoneNumberActive(data.phone)
			onNextAction(data.phone)
		}
	}

	function onNextAction(phoneNumber: string) {
		if (!phoneNumber) return
		loginContentActive(!activeLoginContent)
		enterSMSContentActive(!activeEnterSMSContent)
	}

	return (
		<>
			<div className={`${style['input-text__area']} ${className}`}>
				<label
					htmlFor="Телефон"
					className={`${style['input-text__label']} ${phone ? style['active'] : ''}`}
				>
					Телефон
				</label>
				<Input
					id="Телефон"
					className={`${style['input-text__input']} ${phoneValidate ? style['error_input'] : ''}`}
					minLength="16"
					maxLength="16"
					required
					country="RU"
					international
					withCountryCallingCode
					value={phone}
					onChange={(value: string) => {
						setPhone(value ? value : '+7')
						setPhoneValidate(false)
					}}
				/>
				{phoneValidate && <div className={style.error}>Введён некорректный номер</div>}
			</div>
		</>
	)
}

export default InputPhone
