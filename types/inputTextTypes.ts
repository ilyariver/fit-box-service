import React from 'react'

export interface InputTextTypes {
	label?: string
	className?: string
	inlineStyle?: React.CSSProperties
	type?: string
	onChange?: any
	value?: string
	errorMsg?: string
	validate?: boolean
}
