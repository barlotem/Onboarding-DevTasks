import { configureStore } from '@reduxjs/toolkit';
import taskListReducer from './components/taskList/taskListSlice';
export default configureStore({
	reducer: {
		taskList: taskListReducer,
	},
});
