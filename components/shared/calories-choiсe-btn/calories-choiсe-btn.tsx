import {FC} from 'react'
import style from './calories-choice-btn.module.scss'


const CaloriesChoiceBtn = () => {
	return (
		<div>
			<button className={style['calories-choice-btn']}>
				span.{style['calories-choice-btn__button']}
			</button>
		</div>
	)
}

export default CaloriesChoiceBtn
