import React, { Component } from 'react';
import { trace } from 'mobx';
import { observer } from 'mobx-react';
import classNames from 'classnames';
import TodoItemStore from './todo-item.store';
import './todo-item.scss';

@observer
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.store = new TodoItemStore();
  }

  handleChange = (todo) => {
    let { editTodo } = this.store;
    editTodo(todo)
  }
  render () {
    trace();
    let { todo } = this.props;
    let { title, finished } = todo;

    return (
      <React.Fragment>
        <input type="checkbox" checked={finished} className="toggle" onChange={() => this.handleChange(todo)} />
        <span className={classNames('title', { finished: finished })} >{title}</span>
      </React.Fragment>
    );
  }
}

export default TodoItem;
