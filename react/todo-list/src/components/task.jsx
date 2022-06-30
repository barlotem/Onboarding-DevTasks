import React, { Component } from 'react';

class Task extends Component {
	state = {};

	render() {
		return (
			<div className='m-2'>
				<input
					name='isComplete'
					type='checkbox'
					checked={this.props.task.isComplete}
					onChange={(event) => {
						const target = event.target;
						const value =
							target.type === 'checkbox' ? target.checked : target.value;
						this.props.onUpdateCompleteStatus(value, this.props.task.id);
					}}
				/>
				<span className='m-2'>{this.props.task.description}</span>
				<button
					className='btn btn-danger btn-sm'
					onClick={() => this.props.onDelete(this.props.task.id)}
				>
					Delete
				</button>
			</div>
		);
	}
}

export default Task;
