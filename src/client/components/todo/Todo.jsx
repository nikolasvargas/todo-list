import React from 'react';
import PageHeader from '../../views/PageHeader';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default props => (
  <div>
    <PageHeader name='Todo' small='Register' />
    <TodoForm />
    <TodoList />
  </div>
)