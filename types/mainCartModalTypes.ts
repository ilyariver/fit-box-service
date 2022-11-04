import { number } from 'prop-types';

export interface MainCartModalState {
	activeCartModal: boolean
}

export interface ShowDialogWindowState {
	activeDialogModal: boolean
	activeCitiesContent: boolean
	activeLoginContent: boolean
	activeEnterSMSContent: boolean
	getNumberPhone: string
	sendCodeRepeat: boolean
	addSSNValue: AddSSNValueTypes[]
	activeEnterPasswordContent: boolean
}

export interface AddSSNValueTypes {
	[key: string]: string
}

export enum ModalActionTypes {
	SET_ACTIVE_CART_MODAL = 'SET_ACTIVE_CART_MODAL',
	SET_ACTIVE_DIALOG_MODALS = 'SET_ACTIVE_DIALOG_MODALS',
	SET_ACTIVE_CITIES = 'SET_ACTIVE_CITIES',
	SET_ACTIVE_LOGIN = 'SET_ACTIVE_LOGIN',
	SET_ACTIVE_ENTER_SMS_CODE = 'SET_ACTIVE_ENTER_SMS_CODE',
	GET_NUMBER_PHONE = 'GET_NUMBER_PHONE',
	SEND_CODE_REPEAT = 'SEND_CODE_REPEAT',
	SET_ACTIVE_ENTER_PASSWORD = 'SET_ACTIVE_ENTER_PASSWORD',
	ADD_SSN_VALUE = 'ADD_SSN_VALUE',
}

interface ActiveAction {
	type: ModalActionTypes.SET_ACTIVE_CART_MODAL
}

interface DialogModalsAction {
	type: ModalActionTypes.SET_ACTIVE_DIALOG_MODALS,
	payload: boolean
}

interface ActiveCitiesAction {
	type: ModalActionTypes.SET_ACTIVE_CITIES,
	payload: boolean
}

interface ActiveLoginAction {
	type: ModalActionTypes.SET_ACTIVE_LOGIN,
	payload: boolean
}

interface ActiveEnterSMSAction {
	type: ModalActionTypes.SET_ACTIVE_ENTER_SMS_CODE,
	payload: boolean
}

interface GetNumberPhoneAction {
	type: ModalActionTypes.GET_NUMBER_PHONE,
	payload: string
}

interface SendCodeRepeatAction {
	type: ModalActionTypes.SEND_CODE_REPEAT,
	payload: boolean
}

interface AddSSNValueAction {
	type: ModalActionTypes.ADD_SSN_VALUE
	payload: AddSSNValueTypes
}

interface ActiveEnterPasswordAction {
	type: ModalActionTypes.SET_ACTIVE_ENTER_PASSWORD,
	payload: boolean
}

export type CartModalAction =
	ActiveAction
	| DialogModalsAction
	| ActiveCitiesAction
	| ActiveLoginAction
	| ActiveEnterSMSAction
	| GetNumberPhoneAction
	| SendCodeRepeatAction
	| AddSSNValueAction
	| ActiveEnterPasswordAction

