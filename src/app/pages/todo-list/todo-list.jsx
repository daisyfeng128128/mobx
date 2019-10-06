import React, { Component } from 'react';
import { spy, trace } from 'mobx';
import { observer } from "mobx-react";
import TodoView from './../todo-view/todo-view';
import TodoHeader from './../todo-header/todo-header';
import TodoFooter from './../todo-footer/todo-footer';
import TodoListStore from './todo-list.store';
import './todo-list.scss';

// spy(event => {
//   console.log(event)
// })

@observer
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.store = new TodoListStore();

    this.state = { inputVal: '' }
  }

  handleSubmit = (e) => {
    let { createTodo } = this.store;

    e.preventDefault();
    createTodo(this.state.inputVal);
    this.setState({
      inputVal: ''
    })
  }

  handleChange = (e) => {
    let inputVal = e.target.value;
    this.setState({
      inputVal
    })
  }

  render () {
    trace();
    let { todos, removeTodo } = this.store;
    let { inputVal: val } = this.state;

    return (
      <div>
        <TodoHeader todos={todos} />
        {/* <header>
          <form onSubmit={this.handleSubmit}>
            <input type="text" className="input-item" onChange={this.handleChange} value={val} placeholder="pls input value" />
          </form>
        </header> */}
        <ul>
          <TodoView todos={todos} removeTodo={removeTodo} />
        </ul>
        <TodoFooter todos={todos} />
      </div >
    );
  }
}

export default TodoList;
