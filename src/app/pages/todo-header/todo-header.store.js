import { Component } from 'react';
import { action, observable, toJS } from 'mobx';

class Todo {
  @observable id = Math.random();
  @observable title = "";
  @observable finished = false;

  constructor(title) {
    this.title = title;
  }

  @action finishedToggle () {
    this.finished = !this.finished;
  }
}

class TodoHeaderStore extends Component {
  constructor(props) {
    super(props);
    this.todos = props.todos;
  }

  @action
  createTodo = (value) => {
    // this.todos.unshift(new Todo(value));
    this.todos = [...this.todos, toJS(new Todo(value))];
    console.log(toJS(this.todos))

  }
}

export default TodoHeaderStore;