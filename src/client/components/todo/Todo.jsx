import React, { Component } from 'react';
import PageHeader from '../../views/PageHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class Todo extends Component {
  render() {
    return (
      <div>
        <PageHeader name='Todo' small='Register' />
        <TodoForm />
        <TodoList />
      </div>
    )
  }
}

export default Todo;