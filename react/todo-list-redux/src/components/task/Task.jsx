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
				onChange={() => props.onUpdateCompleteStatus()}
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
