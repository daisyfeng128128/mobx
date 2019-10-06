import { Component } from 'react';
import { computed } from 'mobx';

class TodoFooterStore extends Component {
  constructor(data) {
    super(data);
    this.todos = data.todos;
  }
  @computed get left () {
    return this.todos.length ? this.todos.filter(todo => !todo.finished).length : 0;
  }
}

export default TodoFooterStore;