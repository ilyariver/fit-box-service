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

export const nextMenuCardsActive = (payload: number): ProgramAction => {
	return { type: ProgramActionTypes.NEXT_CARDS, payload }
}

export const setDaysDurationAction = (payload: number, id: number): ProgramAction => {
	return { type: ProgramActionTypes.CART_DAYS_DURATION, payload, id }
}

export const removeProgramFromCartAction = (payload: number): ProgramAction => {
	return { type: ProgramActionTypes.REMOVE_PROGRAM_FROM_CART, payload }
}

export const changeDietAction = (payload: string): ProgramAction => {
	return { type: ProgramActionTypes.CHANGE_DIET_FROM_CART, payload }
}


