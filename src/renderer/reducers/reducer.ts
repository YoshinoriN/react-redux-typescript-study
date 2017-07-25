import * as Redux from 'redux';

import * as Action from '../actions/action';
import * as Todo from '../components/todo';

function addTodo(state: Todo.List, payload: Action.AddTodoPayload) {
  var todos = <{ [key: number]: Todo.Todo }>Object.assign({}, state.todos);
  var todo = new Todo.Todo(payload.description, payload.content);
  todos[todo.id] = todo;
  return <Todo.List>Object.assign({}, state, <Todo.List>{
    todos: todos
  });
}

//アプリケーションからdispatchを利用してstoreにデータを送る
export function todos(state: Todo.List = new Todo.List(), action: Action.Action<any>) {
  switch (action.type) {
    case Action.Types.AddTodo:
      return addTodo(state, <Action.AddTodoPayload>action.payload);
    default:
      return state;
  }
}

export interface TodoAppState {
  todos: Todo.List
}

export const todoApp = Redux.combineReducers({
  todos
});