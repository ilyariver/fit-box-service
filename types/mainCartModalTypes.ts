export interface MainCartModalState {
	activeCartModal: boolean
}

export interface SelectCityModalState {
	activeSelectCityModal: boolean
}

export enum ModalActionTypes {
	SET_ACTIVE_CART_MODAL = 'SET_ACTIVE_CART_MODAL',
	SET_ACTIVE_DIALOG_MODALS = 'SET_ACTIVE_DIALOG_MODALS'
}

interface ActiveAction {
	type: ModalActionTypes.SET_ACTIVE_CART_MODAL
}

interface DialogModalsAction {
	type: ModalActionTypes.SET_ACTIVE_DIALOG_MODALS,
	payload: boolean
}

export type CartModalAction =
	ActiveAction
	| DialogModalsAction

