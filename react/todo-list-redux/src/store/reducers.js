import * as types from './actionTypes';

const initialState = {
	tasks: {
		1: { description: 'test 1', isComplete: false },
		2: { description: 'test 2', isComplete: false },
		3: { description: 'test 3', isComplete: false },
	},
	nextId: 4,
};

export default function taskListReducer(state = initialState, action) {
	switch (action.type) {
		case types.ADD_TASK:
			let newTasks = { ...state.tasks };
			newTasks[state.nextId] = action.task;
			return { ...state, tasks: newTasks, nextId: state.nextId + 1 };
		case types.DELETE_TASK:
			let newTasks1 = { ...state.tasks };
			delete newTasks1[action.id];
			return {
				...state,
				tasks: newTasks1,
			};
		case types.UPDATE_TASK:
			let newTasks2 = { ...state.tasks };
			newTasks2[action.payload.id] = action.payload.task;
			return { ...state, tasks: newTasks2 };
		default:
			return state;
	}
}
