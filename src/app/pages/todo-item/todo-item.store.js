import { Component } from 'react';
import { observable, action } from 'mobx';

class TodoItem extends Component {
  @observable title = '';
  @observable finished = false;

  @action
  editTodo = (todo) => {
    todo.finished = !todo.finished;
  }
}

export default TodoItem;
