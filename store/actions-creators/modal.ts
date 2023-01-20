import {
	AddSSNValueTypes,
	CartModalAction,
	ModalActionTypes,
	ShowDialogWindowState
} from '../../types/mainCartModalTypes';

export const cartModalActive = (): CartModalAction  => {
	return { type: ModalActionTypes.SET_ACTIVE_CART_MODAL }
}

export const dialogModalsActive = (payload: boolean): CartModalAction => {
	return { type: ModalActionTypes.SET_ACTIVE_DIALOG_MODALS, payload }
}

export const citiesContentActive = (payload: boolean): CartModalAction => {
	return { type: ModalActionTypes.SET_ACTIVE_CITIES, payload }
}

export const loginContentActive = (payload: boolean): CartModalAction => {
	return { type: ModalActionTypes.SET_ACTIVE_LOGIN, payload }
}

export const enterSMSContentActive = (payload: boolean): CartModalAction => {
	return { type: ModalActionTypes.SET_ACTIVE_ENTER_SMS_CODE, payload }
}

export const sendCodeRepeatActive = (payload: boolean) => {
	return { type: ModalActionTypes.SEND_CODE_REPEAT, payload }
}

export const getPhoneNumberActive = (payload: string): CartModalAction => {
	return { type: ModalActionTypes.GET_NUMBER_PHONE, payload }
}

export const getEmailActive = (payload: string): CartModalAction => {
	return { type: ModalActionTypes.GET_EMAIL, payload }
}

// export const addSSNValuesActive = (payload: AddSSNValueTypes[] = []): CartModalAction => {
// 	return { type: ModalActionTypes.ADD_SSN_VALUE, payload }
// }

export const orderModalActive = (payload: boolean): CartModalAction => {
	return { type: ModalActionTypes.SET_ACTIVE_ORDER_CALL, payload }
}
