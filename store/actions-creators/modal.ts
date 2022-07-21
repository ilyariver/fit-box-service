import { ModalAction, ModalActionTypes } from '../../types/mainModalTypes'

export const modalActive = (): ModalAction  => {
	return { type: ModalActionTypes.SET_ACTIVE_MODAL }
}
