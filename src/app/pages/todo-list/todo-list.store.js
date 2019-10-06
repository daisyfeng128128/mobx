import { Component } from 'react';
import { action, observe, observable } from 'mobx';



class TodoListStore extends Component {
  @observable todos = [];
  @observable finished = false;

  constructor() {
    super();
    observe(this.todos, change => {
      // console.log(change)
    })
  }

  @action
  removeTodo = (todo) => {
    this.todos.remove(todo);
  }
}

export default TodoListStore;
