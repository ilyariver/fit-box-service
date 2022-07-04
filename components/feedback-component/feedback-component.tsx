import {FC} from 'react'
import style from './feedback-component.module.scss'

interface FeedbackTypes {
	img: string
	name: string
	comment: string
}

const FeedbackComponent: FC<FeedbackTypes> = ({img, name, comment}) => {
	return (
		<div className={style['feedback']}>
			<div className={style['feedback__avatar']}>
				<img src={img} alt="" className={style['feedback__img']}/>
			</div>
			<div className={style['feedback__name']}>{name}</div>
			<div className={style['feedback__comment']}>{comment}</div>
		</div>
	)
}

export default FeedbackComponent
