import { combineReducers } from 'redux'
import { purposeReducer } from './purposeReducer'
import { programReducer } from './programReducer'
import { faqReducer } from './faqReducer'
import { mainCartModalReducer } from './mainCartModalReducer'
import { dialogModalsReducer } from './dialogModalsReducer'
import { selectCityReducer } from './selectedCityReducer'


export const rootReducer = combineReducers({
	selectedCity: selectCityReducer,
	purpose: purposeReducer,
	program: programReducer,
	faq: faqReducer,
	cartModal: mainCartModalReducer,
	dialogModals: dialogModalsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
