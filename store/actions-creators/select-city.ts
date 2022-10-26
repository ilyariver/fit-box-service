import { CurrentCityAction, SelectCityActionTypes } from '../../types/selectCityTypes'

export const setCurrentCityActive = (payload: number): CurrentCityAction => {
	return { type: SelectCityActionTypes.SET_CURRENT_CITY, payload }
}
