import { FC, useEffect, useState } from 'react'
import style from './calories-choice-btn.module.scss'
import { ProgramTypeSet } from '../../../types/programTypes'
import { useActions } from '../../../hooks/useAction'
import { useTypedSelector } from '../../../hooks/useTypedSelector'


interface CaloriesChoiceInterface {
	id: number
	type: ProgramTypeSet
	active: boolean
	sliderTo?: any
}

const CaloriesChoiceBtn: FC<CaloriesChoiceInterface> = ({id, type, active, sliderTo} ) => {
	const { programActive, purposeActive } = useActions()

	const setActivePurpose = (): void => {
		sliderTo?.current.slideTo(id-1)
		purposeActive(id)
		programActive(id)
	}

	return (
		<div className={style['calories-choice-btn']}>
			<button
				onClick={setActivePurpose}
				className={`${style['calories-choice-btn__button']} ${active && style['calories-choice-btn__button--active']}`}>
				<div className={style['calories-choice-btn__title']}>{type.title}</div>
				<span className={style['calories-choice-btn__cCal']}>{type.cCal} ккал</span>
			</button>
		</div>
	)
}

export default CaloriesChoiceBtn
