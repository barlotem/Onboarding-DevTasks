import { createSlice } from '@reduxjs/toolkit';

export const taskListSlice = createSlice({
	name: 'taskList',
	initialState: {
		tasks: {
			1: { description: 'test 1', isComplete: false },
			2: { description: 'test 2', isComplete: false },
			3: { description: 'test 3', isComplete: false },
		},
		nextId: 4,
	},
	reducers: {
		addTask: (state, action) => {
			state.tasks[state.nextId] = action.payload;
			state.nextId++;
		},
		deleteTask: (state, action) => {
			delete state.tasks[action.payload];
		},
		updateTask: (state, action) => {
			state.tasks[action.payload.id] = action.payload.task;
		},
	},
});

export const { addTask, deleteTask, updateTask } = taskListSlice.actions;
export default taskListSlice.reducer;
