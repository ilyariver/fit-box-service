import { FC, FormEvent, useState } from 'react'
import style from './input-text.module.scss'
import { InputTextTypes } from '../../../types/inputTextTypes'
import Input from 'react-phone-number-input/input'

const InputText: FC<InputTextTypes> = (
	{
		className,
		inlineStyle,
		label,
		typePhone
	}) => {
	const ruCode: string = '+7'
	const [activeLabel, setActiveLabel] = useState<boolean>(false)
	const [valueText, setValueText] = useState<string>('')
	const [phoneValidate, setPhoneValidate] = useState<boolean>(false)
	const [phone, setPhone] = useState<string>(ruCode)

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const data = {
			phone,
		}

		if (data.phone.length < 12) {
			setPhoneValidate(true)
		} else {
			setPhoneValidate(false)
			setPhone(ruCode)
		}
	}

	return (
		<form className={`${style['input-text']} ${className}`} style={ inlineStyle } onSubmit={handleSubmit}>
			{!typePhone && <div>
				<label
					className={`${style['input-text__label']} ${activeLabel || valueText.length ? style['active'] : ''}`}
					htmlFor={label}
				>{label}</label>
				<input
					className={style['input-text__input']}
					id={label}
					type="text"
					value={valueText}
					onChange={event => setValueText(event.target.value)}
					onFocus={() => setActiveLabel(true)}
					onBlur={() => setActiveLabel(false)}
				/>
			</div>}
			{typePhone && <div className={style['input-text__area']}>
				<label
					htmlFor={ label }
					className={`${style['input-text__label']} ${phone ? style['active'] : ''}`}
				>
					{ label }
				</label>
				<Input
					id={ label }
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
				{phoneValidate && <div className={style.error}>Кажется здесь не хватает цифр телефона</div>}
			</div>}

		</form>
	)
}

export default InputText
