import { combineReducers } from 'redux';
import { tab1Reducer, tab1StoreType } from './tab1';
import { todosReducer, FetchedTodos, todoIdReducer, TodoId } from './tab3Reducers';

export default combineReducers({
    tab1Reducer,
    todos: todosReducer,
    todoId: todoIdReducer
});

export type Reducers = {
    tab1Reducer : tab1StoreType,
    todos: FetchedTodos,
    todoId: TodoId
};
