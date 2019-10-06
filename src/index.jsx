import { observable, action, autorun, when, reaction } from 'mobx';
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { observer, PropTypes as ObservablePropTypes } from 'mobx-react';
import TodoList from './todo-list/todo-list';

ReactDom.render(<TodoList />, document.querySelector('#root'));
