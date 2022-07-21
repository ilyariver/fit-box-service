import { FaqAction, FaqActionTypes } from '../../types/faqTypes'


export const faqActive = (payload: number): FaqAction => {
	return { type: FaqActionTypes.SET_ACTIVE_QUESTIONS_TYPE, payload }
}
