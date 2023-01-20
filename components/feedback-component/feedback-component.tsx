import React, { FC, useEffect } from 'react'
import style from './feedback-component.module.scss'
import Aos from 'aos'

interface FeedbackTypes {
	img: any
}

const FeedbackComponent: FC<FeedbackTypes> = ({img}) => {
	return (
		<div className={style['feedback']}>
			<div className={style['feedback__avatar']}>
				<img src={img} alt={'отзыв'} className={style['feedback__img']} />
			</div>
		</div>
	)
}

export default FeedbackComponent
