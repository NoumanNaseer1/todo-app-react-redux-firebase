import { Button, ListItem, ListItemText } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { deleteTodos, updateTodos } from './redux/actions/todoAction'

const TodoListItem = ({ todo, inprogress, id }) => {
	const dispatch = useDispatch()

	const toggleInProgress = () => {
		dispatch(updateTodos(id, inprogress))
	}

	const deleteTodo = () => {
		dispatch(deleteTodos(id))
	}

	return (
		<div style={{ display: 'flex' }}>
			<ListItem>
				<ListItemText primary={todo} secondary={inprogress ? 'In Progress 🙂' : 'Completed 😃💚'} />
			</ListItem>
			<Button onClick={toggleInProgress}>{inprogress ? 'Done' : 'UnDone'}</Button>
			<Button onClick={deleteTodo}>X</Button>
		</div>
	)
}

export default TodoListItem
