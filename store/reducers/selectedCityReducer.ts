import { Cities, CurrentCityAction, SelectCityActionTypes, SelectCityTypes } from '../../types/selectCityTypes'

const initialState: SelectCityTypes = {
	cities: [
		{id: 1, title: 'Ульяновск', where: 'Ульяновске', link: 'ulyanovsk', active: false},
		{id: 2, title: 'Димитровград', where: 'Димитровграде', link: 'dimitrovgrad', active: false},
		{id: 3, title: 'Казань', where: 'Казани', link: 'kazan', active: false},
		{id: 4, title: 'Самара', where: 'Самаре', link: 'samara', active: false},
		{id: 5, title: 'Тольятти', where: 'Тольятти', link: 'togliatti', active: false},
	]
}

export const selectCityReducer = (state = initialState, action: CurrentCityAction): SelectCityTypes => {
	switch (action.type) {
		case SelectCityActionTypes.SET_CURRENT_CITY:
			return {
				cities: state.cities.map(city => {
					if (city.id === action.payload) {
						return {
							...city,
							active: true
						}
					}
					return {
						...city,
						active: false
					}
				})
			}
		default:
			return state
	}
}
