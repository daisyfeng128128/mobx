import React, { Component } from 'react';
import { trace } from 'mobx';
import { observer } from 'mobx-react';
import TodoFooterStore from './todo-footer.store';

@observer
class TodoFooter extends Component {
  constructor(todos) {
    super(todos);
    this.store = new TodoFooterStore(todos);
  }

  render () {
    trace();
    let { left } = this.store;

    return (
      <footer>Tasks left: {left}</footer>
    );
  }
}

export default TodoFooter;