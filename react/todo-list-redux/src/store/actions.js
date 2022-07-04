import * as types from './actionTypes';

export function addTask(task) {
	return { type: types.ADD_TASK, task };
}

export function deleteTask(id) {
	return { type: types.DELETE_TASK, id };
}

export function updateTask(id, task) {
	return { type: types.UPDATE_TASK, payload: { id: id, task: task } };
}
