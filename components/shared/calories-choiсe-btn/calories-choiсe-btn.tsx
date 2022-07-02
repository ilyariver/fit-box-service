import {FC} from 'react'
import style from './calories-choice-btn.module.scss'

interface CaloriesChoiceInterface {
	title: string
	cCal: number
	active: boolean
}

const CaloriesChoiceBtn: FC<CaloriesChoiceInterface> = ({title = '', cCal, active}) => {
	return (
		<div className={style['calories-choice-btn']}>
			<button
				className={`${style['calories-choice-btn__button']} ${!active && style['calories-choice-btn__button--active']}`}>
				<div className={style['calories-choice-btn__title']}>{title}</div>
				<span className={style['calories-choice-btn__cCal']}>{cCal} ккал</span>
			</button>
		</div>
	)
}

export default CaloriesChoiceBtn
