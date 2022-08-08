import { ProgramAction, ProgramActionTypes } from '../../types/programTypes'


export const programActive = (payload: number): ProgramAction => {
	return { type: ProgramActionTypes.SET_ACTIVE_SET, payload }
}

export const weekdayActive = (payload: string): ProgramAction => {
	return { type: ProgramActionTypes.CHOICE_WEEK_DAY, payload }
}

export const numberOfDaysActive = (payload: number): ProgramAction => {
	return { type: ProgramActionTypes.SET_NUMBER_OF_DAYS, payload }
}

export const placeAnOrderActive = (): ProgramAction => {
	return { type: ProgramActionTypes.ADD_TO_CART }
}

export const nextMenuCards = (payload: number): ProgramAction => {
	return { type: ProgramActionTypes.NEXT_CARDS, payload }
}
