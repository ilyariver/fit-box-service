import { FC } from 'react'
import style from './separator-line-component.module.scss'

interface SeparatorLineTypes {
	title: string
	color?: string
	className?: string
}

const SeparatorLineComponent: FC<SeparatorLineTypes> = ({ title,color = '#FFFFFF99', className}) => {
	return (
		<div className={`${style['separator-line-component']} ${className}`}>
			<div className={style['separator-line-component__title']} style={{color}}>{title}</div>
			<div className={style['separator-line-component__line']} style={{backgroundColor: color}}> </div>
		</div>
	)
}

export default SeparatorLineComponent
