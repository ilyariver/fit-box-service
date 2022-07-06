import { FC } from 'react'
import style from './separator-line-component.module.scss'

interface SeparatorLineTypes {
	title: string
	bottom?: string
	color?: string
}

const SeparatorLineComponent: FC<SeparatorLineTypes> = ({ title,bottom,color = '#FFFFFF99'}) => {
	return (
		<div className={style['separator-line-component']} style={{marginBottom: bottom}}>
			<div className={style['separator-line-component__title']} style={{color}}>{title}</div>
			<div className={style['separator-line-component__line']} style={{backgroundColor: color}} aria-label="Линия заголовка"></div>
		</div>
	)
}

export default SeparatorLineComponent
