import { Component } from 'react';

class Task extends Component {
	state = {};

	render() {
		return (
			<tr>
				<td>
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
				</td>
				<td>{this.props.task.description}</td>
				<td>
					<button
						className='btn btn-danger btn-sm'
						onClick={() => this.props.onDelete(this.props.task.id)}
					>
						Delete
					</button>
				</td>
			</tr>
		);
	}
}

export default Task;
