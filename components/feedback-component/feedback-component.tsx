import React, {FC} from 'react'
import Image from 'next/image'
import style from './feedback-component.module.scss'
import dish from '../../public/images/dish.png'

interface FeedbackTypes {
	img: any
	name: string
	comment: string
}

const FeedbackComponent: FC<FeedbackTypes> = ({img, name, comment}) => {
	return (
		<div className={style['feedback']}>
			<div className={style['feedback__avatar']}>
				<Image src={img} alt={name} className={style['feedback__img']} width={80} height={80} placeholder="blur" />
			</div>
			<div className={style['feedback__name']}>{name}</div>
			<div className={style['feedback__comment']}>{comment}</div>
		</div>
	)
}

export default FeedbackComponent
