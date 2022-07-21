export interface FaqState {
	id: number
	type: string
	active: boolean
	questions?: FaqQuestionsTypes[]
}

export interface FaqQuestionsTypes {
	title: string
	description: string
}

export enum FaqActionTypes {
	SET_ACTIVE_QUESTIONS_TYPE = 'SET_ACTIVE_QUESTIONS_TYPE'
}

interface ActiveAction {
	type: FaqActionTypes.SET_ACTIVE_QUESTIONS_TYPE
	payload: number
}

export type FaqAction = ActiveAction
