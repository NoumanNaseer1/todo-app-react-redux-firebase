import { Button, TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'

import { getTodos, addTodos } from './redux/actions/todoAction'
import TodoListItem from './Todo'

import './App.css'

function App() {
	const [myTodos, setMyTodos] = useState([])
	const [todoInput, setTodoInput] = useState('')

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getTodos({ setMyTodos }))
	}, [dispatch])

	const addTodo = (e) => {
		e.preventDefault()

		dispatch(addTodos(todoInput))

		setTodoInput('')
	}

	return (
		<div className="App">
			<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
				<h1>Todos App</h1>
				<form>
					<TextField
						id="standard-basic"
						label="Write a Todo"
						value={todoInput}
						onChange={(e) => setTodoInput(e.target.value)}
						style={{ width: '90vw', maxWidth: '500px' }}
					/>
					<Button type="submit" variant="contained" onClick={addTodo} style={{ display: 'none' }}>
						Default
					</Button>
				</form>

				<div style={{ width: '90vw', maxWidth: '500px', marginTop: '2' }}>
					{myTodos.map((todo) => (
						<TodoListItem key={todo.id} todo={todo.todo} inprogress={todo.inprogress} id={todo.id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default App
