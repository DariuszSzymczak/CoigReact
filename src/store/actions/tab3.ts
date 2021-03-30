import { HTTP } from '@ionic-native/http';
import { createSelector } from 'reselect';

import { getHttpUrl } from '../../utils/service';
import { Reducers } from '../reducers/index';

// ---------- ACTION CREATORS ----------

export const fetchTodos = () => async (dispatch: any) => {
  try {
    const params = { 
      // id: 20
      // id: '20'
    };
    const url = getHttpUrl('/todos');
    const response = await HTTP.get(url, params, {});
    const todos = JSON.parse(response.data);

    dispatch({
      type: 'FETCH_TODOS',
      payload: Array.from(todos)
    });
  } catch (error) { 
    dispatch({
      type: 'FETCH_TODOS_FAILURE',
      payload: error.message
    });
  }
};

export const setTodoId = (id: number) => {
  return {
    type: 'SET_TODO_ID',
    payload: id
  };
};

// ---------- SELECTORS ----------

const selectTodos = (state: Reducers) => state.todos.todos;
const selectTodoId = (state: Reducers) => state.todoId;

export const selectTodoById = createSelector(
  [selectTodos, selectTodoId],
  (todos, todoId) => {
    // console.log(todos);
    // console.log(todoId);
    if (todos) {
      // console.log(todos.find((todo: any) => todo.id === todoId));
      return todos.find((todo: any) => todo.id === todoId);
    } else {
      return undefined;
    }
  }
);