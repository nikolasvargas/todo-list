import { combineReducers } from 'redux';
import todoReducer from './todo/TodoReducer';
import clockReducer from './clock/ClockReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  clock: clockReducer
});

export default rootReducer;
