import firebase from 'firebase'

import { db } from '../../firebase_config'

export const TODO_TYPES = {
	GET_TODOS: 'GET_TODOS',
	ADD_TODO: 'ADD_TODO',
}

export const getTodos =
	({ setMyTodos }) =>
	(dispatch) => {
		const res = db.collection('todos').onSnapshot(function (querySnapshot) {
			setMyTodos(
				querySnapshot.docs.map((doc) => ({
					id: doc.id,
					todo: doc.data().todo,
					inprogress: doc.data().inprogress,
				}))
			)
		})

		try {
			dispatch({ type: TODO_TYPES.GET_TODOS, payload: res })
			console.log({ res })
		} catch (error) {
			console.log(error)
		}
	}

export const addTodos = (todoInput) => (dispatch) => {
	db.collection('todos')
		.add({
			inprogress: true,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			todo: todoInput,
		})
		.then(() =>
			dispatch({
				type: TODO_TYPES.ADD_TODO,
				payload: todoInput,
			})
		)
}

export const deleteTodos = (id) => (dispatch) => {
	db.collection('todos').doc(id).delete()
}

export const updateTodos = (id, inprogress) => (dispatch) => {
	db.collection('todos').doc(id).update({
		inprogress: !inprogress,
	})
}
