import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Task from '../task/Task';
import './taskList.css';
import { deleteTask, addTask, updateTask } from './taskListSlice';

function TaskList(props) {
	const tasks = useSelector((state) => state.taskList.tasks);
	const dispatch = useDispatch();
	const [newTaskDescription, setNewTaskDescription] = useState('');

	const renderTasks = () => {
		if (tasks.length === 0) return <p>There are no tasks</p>;
		return (
			<React.Fragment>
				{Object.keys(tasks).map((key) => (
					<Task
						key={key}
						task={tasks[key]}
						onDelete={() => dispatch(deleteTask(key))}
						onUpdateCompleteStatus={() => {
							let newTask = { ...tasks[key] };
							newTask.isComplete = !newTask.isComplete;
							dispatch(updateTask({ id: key, task: newTask }));
						}}
					/>
				))}
			</React.Fragment>
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
				<button
					onClick={() => {
						dispatch(
							addTask({
								description: newTaskDescription,
								isComplete: false,
							})
						);
					}}
					className='btn btn-primary btn-sm'
				>
					Add Todo
				</button>
				<div>
					Open Todos:{' '}
					{
						Object.values(tasks).filter((task) => task.isComplete === false)
							.length
					}{' '}
					(Total: {Object.keys(tasks).length}){' '}
				</div>
				<div className='todos'>{renderTasks()}</div>
			</div>
		</div>
	);
}

export default TaskList;
