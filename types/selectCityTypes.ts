export interface SelectCityTypes {
	cities: Cities[]

}

export interface Cities {
	id?: number
	title: string
	where: string
	link: string
	active: boolean
}

export enum SelectCityActionTypes {
	SET_CURRENT_CITY = 'SET_CURRENT_CITY'
}

interface SelectCityAction {
	type: SelectCityActionTypes.SET_CURRENT_CITY
	payload: number
}

export type CurrentCityAction = SelectCityAction
