import {FC} from 'react'
import style from './calories-choice-btn.module.scss'
import { ProgramTypeSet } from '../../../types/programTypes'
import { useActions } from '../../../hooks/useAction'

interface CaloriesChoiceInterface {
	id: number
	type: ProgramTypeSet
	active: boolean
}

const CaloriesChoiceBtn: FC<CaloriesChoiceInterface> = ({id, type, active} ) => {
	const { programActive } = useActions()

	return (
		<div className={style['calories-choice-btn']}>
			<button
				onClick={() => programActive(id)}
				className={`${style['calories-choice-btn__button']} ${active && style['calories-choice-btn__button--active']}`}>
				<div className={style['calories-choice-btn__title']}>{type.title}</div>
				<span className={style['calories-choice-btn__cCal']}>{type.cCal} ккал</span>
			</button>
		</div>
	)
}

export default CaloriesChoiceBtn
