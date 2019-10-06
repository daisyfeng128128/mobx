import React, { Component } from 'react';
import { observer } from "mobx-react";
import TodoItem from './../todo-item/todo-item';

@observer
class TodoView extends Component {
  render () {
    // editTodo = (todo) => {
    //   todo.finished = !todo.finished;
    // }

    let { todos, removeTodo } = this.props;

    return (
      <React.Fragment>
        {todos && todos.map(todo => {
          return <li key={todo.id} className="todo-item">
            <TodoItem todo={todo} toggle={this.editTodo} />
            <span className="delete" onClick={() => removeTodo(todo)}>x</span>
          </li>
        })
        }
      </React.Fragment>
    );
  }
}

export default TodoView;