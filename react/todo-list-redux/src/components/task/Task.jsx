import React from 'react';
import './task.js';
import { deleteButton, checkbox, description, flexRow } from './task';
import { css } from 'glamor';

function Task(props) {
	return (
		<div {...css(flexRow)}>
			<input
				{...css(checkbox)}
				name='isComplete'
				type='checkbox'
				checked={props.task.isComplete}
				onChange={() => props.onUpdateCompleteStatus()}
			/>
			<span {...css(description)}>{props.task.description}</span>
			<button
				className='btn btn-danger btn-sm'
				{...css(deleteButton)}
				onClick={() => props.onDelete()}
			>
				Delete
			</button>
		</div>
	);
}

export default Task;
