import React from 'react';

function Task(props) {
	return (
		<tr>
			<td>
				<input
					name='isComplete'
					type='checkbox'
					checked={props.task.isComplete}
					onChange={(event) => {
						const target = event.target;
						const value =
							target.type === 'checkbox' ? target.checked : target.value;
						props.onUpdateCompleteStatus(value, props.task.id);
					}}
				/>
			</td>
			<td>{props.task.description}</td>
			<td>
				<button
					className='btn btn-danger btn-sm'
					onClick={() => props.onDelete(props.task.id)}
				>
					Delete
				</button>
			</td>
		</tr>
	);
}

export default Task;
