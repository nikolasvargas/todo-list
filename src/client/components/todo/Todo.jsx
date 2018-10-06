import React, { Component } from 'react';
import PageHeader from '../../views/PageHeader';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state =  { description: '', list: [] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleAdd() {
    console.log('handleAdd called');
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <PageHeader name='Todo' small='Register' />
        <TodoForm description={this.state.description}
                  handleAdd={this.handleAdd}
                  handleChange={this.handleChange} />
        <TodoList />
      </div>
    )
  }
}

export default Todo;