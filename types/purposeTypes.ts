export interface PurposeState {
	id: number
	title: string
	img: any
	text?: string
	active: boolean
}

export enum PurposeActionTypes {
	SET_ACTIVE = 'SET_ACTIVE'
}

interface ActiveAction {
	type: PurposeActionTypes.SET_ACTIVE,
	payload: number
}

export type PurposeAction = ActiveAction
