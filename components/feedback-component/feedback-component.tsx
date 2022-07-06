import React, {FC} from 'react'
import style from './feedback-component.module.scss'
import dish from '../../public/images/dish.png'

interface FeedbackTypes {
	img: string
	name: string
	comment: string
}

const FeedbackComponent: FC<FeedbackTypes> = ({img, name, comment}) => {
	return (
		<div className={style['feedback']}>
			<div className={style['feedback__avatar']}>
				<picture>
					<source srcSet={img} type="image/webp" />
					<img src={img} alt="" className={style['feedback__img']}/>
				</picture>
			</div>
			<div className={style['feedback__name']}>{name}</div>
			<div className={style['feedback__comment']}>{comment}</div>
		</div>
	)
}

export default FeedbackComponent
