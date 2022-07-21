import { PurposeAction, PurposeActionTypes, PurposeState } from '../../types/purposeTypes'
import workerImgIcon from '../../public/images/icons/icon-worker.png'
import sportImgIcon from '../../public/images/icons/icon-sport.png'
import personImgIcon from '../../public/images/icons/icon-person.png'
import runImgIcon from '../../public/images/icons/icon-runner.png'
import gymImgIcon from '../../public/images/icons/icon-gym.png'

const initialState: PurposeState[] = [
	{id: 1, title: 'Кушай на работе', img: workerImgIcon.src, text: 'Пятиразовое питание на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни ', active: true},
	{id: 2, title: 'Похудей активно', img: sportImgIcon.src, text: 'Похудей активно на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни ', active: false},
	{id: 3, title: 'Не готовь весь день', img: personImgIcon.src, text: 'Не готовь весь день на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни', active: false},
	{id: 4, title: 'Будь в форме', img: runImgIcon.src, text: 'Будь в форме на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни', active: false},
	{id: 5, title: 'Набери форму', img: gymImgIcon.src, text: 'Набери форму на 2 000 ккал/день для поддержания оптимальной формы при тренировках и просто активном образе жизни', active: false},
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
