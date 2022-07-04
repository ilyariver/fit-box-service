import React, {FC} from 'react'
import style from './about-service-component.module.scss'
import { MainButton } from '../shared/mainButton/mainButton'

interface AboutServiceTypes {
	title: string
	description: string
}

const AboutServiceComponent: FC<AboutServiceTypes> = ({title, description}) => {
	return (
		<div className={style['about-service-component']}>
			<h3 className={style['about-service-component__title']}>{title}</h3>
			<p className={style['about-service-component__description']}>{description}</p>
			<MainButton title="Узнать о нас больше" width="300px" fontSize="18px" />
		</div>
	)
}

export default AboutServiceComponent
