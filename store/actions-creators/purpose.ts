import { PurposeAction, PurposeActionTypes } from '../../types/purposeTypes'


export const purposeActive = (payload: number): PurposeAction => {
	return { type: PurposeActionTypes.SET_ACTIVE, payload }
}
