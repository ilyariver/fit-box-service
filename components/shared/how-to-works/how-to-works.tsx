import React, {FC} from 'react'
import Image from 'next/image'
import style from './how-to-works.module.scss'

interface HowToWorksInterface {
	title: string
	text: string
	img: { src: string }
}

const HowToWorks: FC<HowToWorksInterface> = ({title,text,img}) => {

	return (
		<div className={style['how-to-works']}>
			<div className={style['how-to-works__img']} style={{backgroundImage: `url(${img.src})`}}></div>
			<h3 className={style['how-to-works__title']}>{title}</h3>
			<p className={style['how-to-works__text']}>{text}</p>
		</div>
	)
}

export default HowToWorks
