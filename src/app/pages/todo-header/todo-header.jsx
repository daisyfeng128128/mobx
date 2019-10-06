import React, { Component } from 'react';
import TodoHeaderStore from './todo-header.store';

class TodoHeader extends Component {
  constructor(props) {
    super(props);
    this.store = new TodoHeaderStore(props);

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
    // this.setState({
    //   inputVal
    // })
    // 此处变成异步函数的写法，原因：性能好，虚拟DOM
    this.setState(() => ({
      inputVal
    }))
  }

  render () {
    let { inputVal: val } = this.state;

    return (
      <header>
        <form onSubmit={this.handleSubmit}>
          <input type="text" className="input-item" onChange={this.handleChange} value={val} placeholder="pls input value" />
        </form>
      </header>
    );
  }
}

export default TodoHeader;