// ---------- TODOS ----------

export type TodosAction = {
  type: 'FETCH_TODOS',
  payload: any[]
} | {
  type: 'FETCH_TODOS_FAILURE',
  payload: string
};

export type FetchedTodos = {
  todos: any[],
  error: string | undefined
};

const initialStateOfTodos = {
  todos: [],
  error: undefined
};

export const todosReducer = (state: FetchedTodos = initialStateOfTodos, action: TodosAction): FetchedTodos => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {
        todos: action.payload,
        error: undefined
      };
    case 'FETCH_TODOS_FAILURE':
      return {
        todos: [],
        error: action.payload
      };
    default:
      return state;
  }
};

// ---------- TODO ID ----------

export type TodoIdAction = {
  type: 'SET_TODO_ID',
  payload: number
}

export type TodoId = number | null;

const initialStateOfTodoId = null;

export const todoIdReducer = (state: TodoId = initialStateOfTodoId, action: TodoIdAction): TodoId => {
  switch(action.type) {
    case 'SET_TODO_ID':
      return action.payload;
    default:
      return state;
  }
};