import exp from 'constants'

export interface ProgramState {
	programs: ProgramTypes[]
	weekdays: WeekdaysTypes[]
	choiceWeek: WeekdaysTypes[]
	optionsBtns: OptionsBtns[]
	order: {
		id: number
		active: boolean
		cost: number
		numberOfDays: OptionsBtns[]
		number: number
		menu: ProgramTypes | null
	}
	cart: CartList[]
}

export interface ProgramTypes {
	id: number
	active: boolean
	type: ProgramTypeSet
	offer: ProgramDescription
}

export interface MenuTypes {
	title: { min: string, full: string }
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
	menu: any
	id: number
	cost: number
	numberOfDays: OptionsBtns[]
	active: boolean
}

export interface ProgramTypeSet {
	title: string
	cCal: number
}

export interface ProgramDescription {
	description: {
		text: string
		cost: number
  		deliverDescription: string
	}
}

export interface ProgramMenuList {
	id: number
	title: string
	productComposition: string
	img: any
	minImg: any
}

export type CartList = OrderTypes

export enum ProgramActionTypes {
	SET_ACTIVE_SET = 'SET_ACTIVE_SET',
	CHOICE_WEEK_DAY = 'CHOICE_WEEK_DAY',
	SET_NUMBER_OF_DAYS = 'SET_NUMBER_OF_DAYS',
	ADD_TO_CART = 'ADD_TO_CART',
	NEXT_CARDS = 'NEXT_CARDS',
	CART_DAYS_DURATION = 'CART_DAYS_DURATION',
	REMOVE_PROGRAM_FROM_CART = 'REMOVE_PROGRAM_FROM_CART',
	CHANGE_DIET_FROM_CART = 'CHANGE_DIET_FROM_CART',
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
	type: ProgramActionTypes.ADD_TO_CART
}

interface GetNextCardsAction {
	type: ProgramActionTypes.NEXT_CARDS
	payload: number
}

interface GetCartDaysDurationAction {
	type: ProgramActionTypes.CART_DAYS_DURATION
	payload: number
	id: number
}

interface RemoveProgramFromCartAction {
	type: ProgramActionTypes.REMOVE_PROGRAM_FROM_CART
	payload: number
}

interface ChangeDietFromCartAction {
	type: ProgramActionTypes.CHANGE_DIET_FROM_CART
	payload: string
}


export type ProgramAction =
	ActiveProgramSetAction
	| SetWeekdayAction
	| SetNumberOfDaysAction
	| PlaceOrderAction
	| GetNextCardsAction
	| GetCartDaysDurationAction
	| RemoveProgramFromCartAction
	| ChangeDietFromCartAction
