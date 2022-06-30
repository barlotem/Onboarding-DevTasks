import { Component } from 'react';
import Task from '../task/Task';
import './taskList.css';

class TaskList extends Component {
	state = {
		tasks: [
			{ id: 1, description: 'test 1', isComplete: false },
			{ id: 2, description: 'test 2', isComplete: false },
			{ id: 3, description: 'test 3', isComplete: false },
		],
		newTaskDescription: '',
		nextId: 4,
	};

	addTask = () => {
		let nextId = this.state.nextId;
		const newTask = {
			id: nextId,
			description: this.state.newTaskDescription,
			isComplete: false,
		};
		this.setState({
			nextId: nextId + 1,
			tasks: [...this.state.tasks, newTask],
		});
	};

	handleDeleteTask = (id) => {
		const tasks = this.state.tasks.filter((t) => t.id !== id);
		this.setState({ tasks });
	};

	handleUpdateCompleteStatus = (value, id) => {
		const tasks = this.state.tasks.map((t) =>
			t.id === id ? { ...t, isComplete: value } : t
		);
		this.setState({ tasks });
	};

	updateNewTaskDescription = (event) => {
		this.setState({ newTaskDescription: event.target.value });
	};

	renderTasks = () => {
		if (this.state.tasks.length === 0) return <p>There are no tasks</p>;
		return (
			<table>
				<tbody>
					{this.state.tasks.map((task) => (
						<Task
							key={task.id}
							task={task}
							onDelete={this.handleDeleteTask}
							onUpdateCompleteStatus={this.handleUpdateCompleteStatus}
						/>
					))}
				</tbody>
			</table>
		);
	};

	render() {
		return (
			<div className='container row text-center'>
				<div className='m-4'>
					<h1>My Todo list</h1>
					<input
						type='text'
						value={this.state.newTaskDescription}
						onChange={this.updateNewTaskDescription}
						className='m-2'
					></input>
					<button onClick={this.addTask} className='btn btn-primary btn-sm'>
						Add Todo
					</button>
					<div>
						Open Todos:{' '}
						{
							this.state.tasks.filter((task) => task.isComplete === false)
								.length
						}{' '}
						(Total: {this.state.tasks.length}){' '}
					</div>
					<div className='todos'>{this.renderTasks()}</div>
				</div>
			</div>
		);
	}
}

export default TaskList;
