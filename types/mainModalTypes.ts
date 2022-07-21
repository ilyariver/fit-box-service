export interface MainModalState {
	activeModal: boolean
}

export enum ModalActionTypes {
	SET_ACTIVE_MODAL = 'SET_ACTIVE_MODAL'
}

interface ActiveAction {
	type: ModalActionTypes.SET_ACTIVE_MODAL
}

export type ModalAction = ActiveAction
