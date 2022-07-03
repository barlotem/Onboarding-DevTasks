import React from 'react';
import './task.css';

function Task(props) {
	return (
		<div className='row m-2'>
			<input
				name='isComplete'
				type='checkbox'
				className='checkbox'
				checked={props.task.isComplete}
				onChange={(event) => {
					const target = event.target;
					const value =
						target.type === 'checkbox' ? target.checked : target.value;
					props.onUpdateCompleteStatus(value);
				}}
			/>
			<span className='description'>{props.task.description}</span>
			<button
				className='btn btn-danger btn-sm delete-button'
				onClick={() => props.onDelete()}
			>
				Delete
			</button>
		</div>
	);
}

export default Task;
