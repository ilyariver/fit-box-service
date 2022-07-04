import { FC } from 'react'
import style from './separator-line-component.module.scss'

interface SeparatorLineTypes {
	title: string
	bottom?: string
}

const SeparatorLineComponent: FC<SeparatorLineTypes> = ({ title,bottom }) => {
	return (
		<div className={style['separator-line-component']} style={{marginBottom: bottom}}>
			<div className={style['separator-line-component__title']}>{title}</div>
			<div className={style['separator-line-component__line']} aria-label="Линия заголовка"></div>
		</div>
	)
}

export default SeparatorLineComponent
