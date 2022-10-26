import { CartModalAction, ModalActionTypes } from '../../types/mainCartModalTypes'

export const cartModalActive = (): CartModalAction  => {
	return { type: ModalActionTypes.SET_ACTIVE_CART_MODAL }
}

export const dialogModalsActive = (payload: boolean): CartModalAction => {
	return { type: ModalActionTypes.SET_ACTIVE_DIALOG_MODALS, payload }
}
