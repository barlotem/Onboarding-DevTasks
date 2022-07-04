import { configureStore } from '@reduxjs/toolkit';
import taskListReducer from './reducers';

export default function () {
	return configureStore({ reducer: taskListReducer });
}
