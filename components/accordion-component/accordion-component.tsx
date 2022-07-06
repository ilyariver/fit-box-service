import React, { FC, useState } from 'react'
import style from './accordion-component.module.scss'
import { MainButton } from '../shared/mainButton/mainButton'

interface AboutServiceTypes {
	title: string
	description: string
}

const AccordionComponent: FC<AboutServiceTypes> = ({title, description}) => {
	let [active, setActive] = useState(false)
	const clickOpen = () => setActive(active = !active)
	const styles = {
		transform: `${active ? 'rotate(-90deg)' : 'rotate(0)'}`
	}
	const openAnswerStyle = {
		// transform: `${active ? 'scaleY(1)' : 'scaleY(0)'}`,
		maxHeight: `${active ? '100px' : 0}`,
		paddingTop: `${active ? '20px' : 0}`,
		marginBottom: `${active ? '20px' : 0}`
	}

	return (
		<div className={style['accordion-component']}>
			<div className={style['accordion-component__title-content']}>
				<div className={style['accordion-component__title']}>{title}</div>
				<button className={`${style['accordion-component__open']}`} style={styles} aria-label="открыть подсказку" onClick={clickOpen}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 0L12 24" stroke="#FF576A" strokeWidth="2"/>
						<path d="M24 12L-5.96046e-08 12" stroke="#FF576A" strokeWidth="2"/>
					</svg>
				</button>
			</div>
			<div className={`${ style['accordion-component__description'] }`} style={openAnswerStyle}>{description}</div>
		</div>
	)
}

export default AccordionComponent
