import React, { FC, useState } from 'react'
import style from './accordion-component.module.scss'

interface AboutServiceTypes {
	title: string
	description: string
}

const AccordionComponent: FC<AboutServiceTypes> = ({title, description}) => {
	let [active, setActive] = useState(false)
	const clickOpen = () => setActive(active = !active)
	const styles = {
		transform: `${active ? 'rotate(-180deg)' : 'rotate(0)'}`
	}
	const openAnswerStyle = {
		height: `${active ? 'auto' : '0'}`,
		paddingTop: `${active ? '20px' : 0}`,
		marginBottom: `${active ? '20px' : 0}`
	}

	return (
		<div className={style['accordion-component']}>
			<div className={style['accordion-component__title-content']} onClick={clickOpen}>
				<div className={style['accordion-component__title']}>{title}</div>
				<div className={`${style['accordion-component__open']}`} style={styles} >
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 0L12 24" stroke="#FF576A" strokeWidth="2"/>
						<path d="M24 12L-5.96046e-08 12" stroke="#FF576A" strokeWidth="2"/>
					</svg>
				</div>
			</div>
			<div className={`${ style['accordion-component__description'] }`} style={openAnswerStyle}>{description}</div>
		</div>
	)
}

export default AccordionComponent
