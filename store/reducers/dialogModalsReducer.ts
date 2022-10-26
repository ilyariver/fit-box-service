import {
	CartModalAction,
	MainCartModalState,
	ModalActionTypes, SelectCityModalState
} from '../../types/mainCartModalTypes'

const initialState: SelectCityModalState = {
	activeSelectCityModal: false
}

export const dialogModalsReducer = (state = initialState, action: CartModalAction): SelectCityModalState => {
	switch (action.type) {
		case ModalActionTypes.SET_ACTIVE_DIALOG_MODALS:
			return {
				...state,
				activeSelectCityModal: action.payload
			}
		default:
			return state
	}
}
