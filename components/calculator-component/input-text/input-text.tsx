import { FC, useState } from 'react'
import style from './input-text.module.scss'
import { InputTextTypes } from '../../../types/inputTextTypes'

const InputText: FC<InputTextTypes> = ({ inlineStyle, label }) => {
	const [activeLabel, setActiveLabel] = useState(false)
	const [valueText, setValueText] = useState('')

	return (
		<div className={style['input-text']} style={ inlineStyle }>
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
	)
}

export default InputText
