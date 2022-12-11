import { PurposeAction, PurposeActionTypes, PurposeState } from '../../types/purposeTypes'
import { state } from '../../mockDate'
import workerGirlImgIcon from '../../public/images/icons/icon-girl-worker.png'
import workerImgIcon from '../../public/images/icons/icon-worker.png'
import sportImgIcon from '../../public/images/icons/icon-sport.png'
import personImgIcon from '../../public/images/icons/icon-person.png'
import runImgIcon from '../../public/images/icons/icon-runner.png'
import gymImgIcon from '../../public/images/icons/icon-gym.png'

const initialState: PurposeState[] = [
	{id: 1, title: 'Кушай на работе', img: workerImgIcon.src, text: state.programList['Офис'], active: true},
	{id: 2, title: 'Кушай на работе, но больше', img: workerGirlImgIcon.src, text: state.programList['Офис+'], active: false},
	{id: 3, title: 'Похудей активно', img: sportImgIcon.src, text: state.programList['Фитнес'], active: false},
	{id: 4, title: 'Не готовь весь день', img: personImgIcon.src, text: state.programList['Классик мини'], active: false},
	{id: 5, title: 'Будь в форме', img: runImgIcon.src, text: state.programList['Классик'], active: false},
	{id: 6, title: 'Набери форму', img: gymImgIcon.src, text: state.programList['Классик+'], active: false},
]

export const purposeReducer = (state = initialState, action: PurposeAction): PurposeState[] => {

	switch (action.type) {
		case PurposeActionTypes.SET_ACTIVE:
			return state.map(purpose => {
				if (purpose.id === action.payload) {
					return {...purpose, active: true}
				} else {
					return {...purpose, active: false}
				}
			})

		default:
			return state
	}
}
