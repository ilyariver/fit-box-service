import {
	AddSSNValueTypes,
	CartModalAction,
	MainCartModalState,
	ModalActionTypes,
	ShowDialogWindowState,
} from '../../types/mainCartModalTypes';

const initialState: ShowDialogWindowState = {
	activeDialogModal: false,
	activeCitiesContent: false,
	activeLoginContent: false,
	activeEnterSMSContent: false,
	getNumberPhone: '',
	getEmail: '',
	sendCodeRepeat: false,
	addSSNValue: [],
	activeEnterPasswordContent: false
}

export const dialogModalsReducer = (
	state = initialState,
	action: CartModalAction
	): ShowDialogWindowState => {
	switch (action.type) {
		case ModalActionTypes.SET_ACTIVE_DIALOG_MODALS:
			return {
				...state,
				activeDialogModal: action.payload
			}
		case ModalActionTypes.SET_ACTIVE_CITIES:
			return {
				...state,
				activeCitiesContent: action.payload
			}
		case ModalActionTypes.SET_ACTIVE_LOGIN:
			return {
				...state,
				activeLoginContent: action.payload
			}
		case ModalActionTypes.SET_ACTIVE_ENTER_SMS_CODE:
			return {
				...state,
				activeEnterSMSContent: action.payload
			}
		case ModalActionTypes.GET_NUMBER_PHONE:
			return {
				...state,
				getNumberPhone: action.payload
			}
		case ModalActionTypes.GET_EMAIL:
			return {
				...state,
				getEmail: action.payload
			}
		case ModalActionTypes.SEND_CODE_REPEAT:
			return {
				...state,
				sendCodeRepeat: action.payload
			}
		case ModalActionTypes.ADD_SSN_VALUE:
			return {
				...state,
				// addSSNValue: state.addSSNValue.push(action.payload)
			}
		case ModalActionTypes.SET_ACTIVE_ENTER_PASSWORD:
			return {
				...state,
				activeEnterPasswordContent: action.payload
			}
		default:
			return state
	}
}
