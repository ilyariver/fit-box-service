export interface OrderTypes {
	title: string
	cCal: number
	description: string
	text: string
	deliveryDescription: string
	buttonsGroup: {title: string, active: boolean}[]
	totalSum: number
}
