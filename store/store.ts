import { Context, createWrapper, MakeStore } from 'next-redux-wrapper'
import { createStore, Store } from 'redux'
import { rootReducer, RootState } from './reducers'


// create a makeStore function
const makeStore = (context: Context) => createStore(rootReducer);

// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true})
