import { TODO_TYPES } from '../actions/todoAction'
const initialState = {
	todos: [],
}

const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case TODO_TYPES.GET_TODOS:
			return {
				...state,
				todos: action.payload.todos,
			}

		case TODO_TYPES.ADD_TODO:
			return {
				...state,
				todos: action.payload.todos,
			}

		default:
			return state
	}
}

export default todoReducer
