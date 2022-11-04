import React, {FC} from 'react'
import style from './block-component.module.scss'
import { MainButton } from '../shared/mainButton/mainButton'

interface BlockTypes {
	children: React.ReactNode
	className?: string
}

const BlockComponent: FC<BlockTypes> = ({children, className}) => {
	return (
		<div className={`${style.block} ${className}`}>
			<div className={style.block__wrap}>
				<div className={style.block__content}>
					{ children }
				</div>
			</div>
		</div>
	)
}

export default BlockComponent
