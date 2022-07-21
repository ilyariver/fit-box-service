import { MainModalState, ModalAction, ModalActionTypes } from '../../types/mainModalTypes'


const initialState: MainModalState = {
	activeModal: false
}

export const mainModalReducer = (state = initialState, action: ModalAction): MainModalState => {
	switch (action.type) {
		case ModalActionTypes.SET_ACTIVE_MODAL:
			return {
				...state,
				activeModal: !state.activeModal
			}
		default:
			return state
	}
}
