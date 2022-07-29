import React, {FC} from 'react'
import style from './about-service-component.module.scss'
import { MainButton } from '../shared/mainButton/mainButton'

interface AboutServiceTypes {
	title: string
	description: string
}

const AboutServiceComponent: FC<AboutServiceTypes> = ({title, description}) => {
	return (
		<div className={style['about-service-component']}
			 data-aos="fade-right"
			 data-aos-offset="200">
			<h3 className={style['about-service-component__title']}>{title}</h3>
			<p className={style['about-service-component__description']}>{description}</p>
			<MainButton className={style['about-service-component__button']}>Узнать о нас больше</MainButton>
		</div>
	)
}

export default AboutServiceComponent
