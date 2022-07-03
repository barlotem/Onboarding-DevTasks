import { useState } from 'react';
import Task from '../task/Task';
import './taskList.css';

function TaskList(props) {
	const [tasks, setTasks] = useState([
		{ id: 1, description: 'test 1', isComplete: false },
		{ id: 2, description: 'test 2', isComplete: false },
		{ id: 3, description: 'test 3', isComplete: false },
	]);

	const [newTaskDescription, setNewTaskDescription] = useState('');

	const [nextId, setNextId] = useState(tasks.length + 1);

	const addTask = () => {
		const newTask = {
			id: nextId,
			description: newTaskDescription,
			isComplete: false,
		};
		setNextId(nextId + 1);
		setTasks([...tasks, newTask]);
	};

	const handleDeleteTask = (id) => {
		const newTasks = tasks.filter((t) => t.id !== id);
		setTasks(newTasks);
	};

	const handleUpdateCompleteStatus = (value, id) => {
		const newTasks = tasks.map((t) =>
			t.id === id ? { ...t, isComplete: value } : t
		);
		setTasks(newTasks);
	};

	const renderTasks = () => {
		if (tasks.length === 0) return <p>There are no tasks</p>;
		return (
			<table>
				<tbody>
					{tasks.map((task) => (
						<Task
							key={task.id}
							task={task}
							onDelete={handleDeleteTask}
							onUpdateCompleteStatus={handleUpdateCompleteStatus}
						/>
					))}
				</tbody>
			</table>
		);
	};

	return (
		<div className='container row text-center'>
			<div className='m-4'>
				<h1>My Todo list</h1>
				<input
					type='text'
					value={newTaskDescription}
					onChange={(event) => setNewTaskDescription(event.target.value)}
					className='m-2'
				></input>
				<button onClick={addTask} className='btn btn-primary btn-sm'>
					Add Todo
				</button>
				<div>
					Open Todos: {tasks.filter((task) => task.isComplete === false).length}{' '}
					(Total: {tasks.length}){' '}
				</div>
				<div className='todos'>{renderTasks()}</div>
			</div>
		</div>
	);
}

export default TaskList;
