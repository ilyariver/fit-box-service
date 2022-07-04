import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createWrapper, MakeStore, Context } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer } from './reducer'

export const makeStore: MakeStore<any> = (context: Context) =>
	createStore(reducer,composeWithDevTools(
		applyMiddleware()
	))

export const wrapper = createWrapper(makeStore, {debug: true})
