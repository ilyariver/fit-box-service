import exp from 'constants'

export interface ProgramState {
	programs: ProgramTypes[]
	weekdays: WeekdaysTypes[]
	choiceWeek: WeekdaysTypes[]
	optionsBtns: OptionsBtns[]
	order?: OrderTypes
	cart: OrderTypes[]
}

export interface ProgramTypes {
	id: number
	active: boolean
	type: ProgramTypeSet
	offer: ProgramDescription
}

export interface MenuTypes {
	title: string
	active: boolean
	menu: ProgramMenuList[]
}

export interface WeekdaysTypes {
	lookupId: number,
	days: MenuTypes[]
}

export interface OptionsBtns {
	number: number
	active: boolean
}

export interface OrderTypes {
	id?: number
	cost?: number
	numberOfDays?: number
}

export interface ProgramTypeSet {
	title: string
	cCal: number
}

export interface ProgramDescription {
	description: {
		text: string,
		cost: number,
		deliverDescription: string
	}
}

export interface ProgramMenuList {
	id: number
	title: string
	productComposition: string
	img: any
}

export type CartList = OrderTypes

export enum ProgramActionTypes {
	SET_ACTIVE_SET = 'SET_ACTIVE_SET',
	CHOICE_WEEK_DAY = 'CHOICE_WEEK_DAY',
	SET_NUMBER_OF_DAYS = 'SET_NUMBER_OF_DAYS',
	PLACE_AN_ORDER = 'PLACE_AN_ORDER'
}

interface ActiveProgramSetAction {
	type: ProgramActionTypes.SET_ACTIVE_SET
	payload: number
}

interface SetWeekdayAction {
	type: ProgramActionTypes.CHOICE_WEEK_DAY
	payload: string
}

interface SetNumberOfDaysAction {
	type: ProgramActionTypes.SET_NUMBER_OF_DAYS
	payload: number
}

interface PlaceOrderAction {
	type: ProgramActionTypes.PLACE_AN_ORDER
}

export type ProgramAction =
	ActiveProgramSetAction | SetWeekdayAction | SetNumberOfDaysAction | PlaceOrderAction
