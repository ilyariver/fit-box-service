import { FC, useState } from 'react'
import style from './input-text.module.scss'
import { InputTextTypes } from '../../../types/inputTextTypes'

const InputText: FC<InputTextTypes> = (
	{
		className,
		inlineStyle,
		label,
		type,
		onChange,
		value,
		errorMsg,
		validate
	}) => {
	const [activeLabel, setActiveLabel] = useState<boolean>(false)

	return (
		<form className={`${style['input-text']} ${className}`} style={ inlineStyle }>
			<div>
				<label
					className={
						`${style['input-text__label']} ${activeLabel 
						|| value?.length ? style['active'] : ''} ${!validate ? style['error_input'] : '' }`
					}
					htmlFor={label}
				>{label}</label>
				<input
					className={`${style['input-text__input']} ${!validate ? style['error_input'] : '' }`}
					id={label}
					type={type || 'text'}
					value={value}
					onChange={onChange}
					onFocus={() => setActiveLabel(true)}
					onBlur={() => setActiveLabel(false)}
				/>
			</div>
			{!validate &&
			  <div className={style.error}>{errorMsg}</div>}
		</form>
	)
}

export default InputText
