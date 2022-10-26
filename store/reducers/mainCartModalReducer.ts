import { MainCartModalState, CartModalAction, ModalActionTypes } from '../../types/mainCartModalTypes'


const initialState: MainCartModalState = {
	activeCartModal: false
}

export const mainCartModalReducer = (state = initialState, action: CartModalAction): MainCartModalState => {
	switch (action.type) {
		case ModalActionTypes.SET_ACTIVE_CART_MODAL:
			return {
				...state,
				activeCartModal: !state.activeCartModal
			}
		default:
			return state
	}
}
