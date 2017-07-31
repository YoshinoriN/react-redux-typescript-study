import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as ReactRouter from 'react-router';

import * as Todo from './todo';
import * as Action from '../actions/action';
import * as Reducer from '../reducers/reducer';

interface TodoComponentProps extends React.Props<{}> {
  todo: Todo.Todo;
}

class TodoComponent extends React.Component<TodoComponentProps, {}> {
  render() {
    var todo = this.props.todo;
    return(
      <li>{todo.description}</li>
    );
  }
}

interface TodoListComponentProps extends React.Props<{}> {
  todos: Todo.List[];
}

class TodoListComponent extends React.Component <TodoListComponentProps, {}> {
  render() {
    var todos = this.props.todos.map(x => <TodoComponent key={x.id} todo={x} />);
    return(
      <div>
        <ul>{todos}</ul>
      </div>
    );
  }
}