import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import todoReducer from './reducers/todoReducer'

const rootReducer = combineReducers({
	todo: todoReducer,
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
