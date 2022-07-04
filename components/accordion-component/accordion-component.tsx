import React, {FC} from 'react'
import style from './accordion-component.module.scss'
import { MainButton } from '../shared/mainButton/mainButton'

interface AboutServiceTypes {
	title: string
	description: string
}

const AccordionComponent: FC<AboutServiceTypes> = ({title, description}) => {
	return (
		<div className={style['accordion-component']}>
			<div className={style['accordion-component__title-content']}>
				<div className={style['accordion-component__title']}>{title}</div>
				<button className={style['accordion-component__open']} aria-label="открыть подсказку">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 0L12 24" stroke="#FF576A" stroke-width="2"/>
						<path d="M24 12L-5.96046e-08 12" stroke="#FF576A" stroke-width="2"/>
					</svg>
				</button>
			</div>
			<div className={style['accordion-component__description']}>{description}</div>
		</div>
	)
}

export default AccordionComponent
