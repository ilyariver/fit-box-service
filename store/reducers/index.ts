import { combineReducers } from 'redux'
import { purposeReducer } from './purposeReducer'
import { programReducer } from './programReducer'
import { faqReducer } from './faqReducer'
import { mainModalReducer } from './mainModalReducer'


export const rootReducer = combineReducers({
	purpose: purposeReducer,
	program: programReducer,
	faq: faqReducer,
	modal: mainModalReducer,
})

export type RootState = ReturnType<typeof rootReducer>
