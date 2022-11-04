import { FC, FormEvent, useState } from 'react'
import style from './input-text.module.scss'
import { InputTextTypes } from '../../../types/inputTextTypes'

const InputText: FC<InputTextTypes> = (
	{
		className,
		inlineStyle,
		label,
	}) => {
	const [activeLabel, setActiveLabel] = useState<boolean>(false)
	const [valueText, setValueText] = useState<string>('')

	return (
		<form className={`${style['input-text']} ${className}`} style={ inlineStyle }>
			<div>
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
			</div>
		</form>
	)
}

export default InputText
