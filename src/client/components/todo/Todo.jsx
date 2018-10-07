import React, { Component } from 'react';
import PageHeader from '../../views/PageHeader';
import axios from 'axios';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

const URL = 'http://localhost:5050/api/todos';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state =  { description: '', list: [] };

    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

    this.refresh();
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value });
  }

  handleAdd() {
    const description = this.state.description;
    axios.post(URL, { description })
      .then(_ => this.refresh());
  }

  handleRemove(todoTask) {
    axios.delete(`${URL}/${todoTask._id}`)
      .then(_ => this.refresh())
  }

  refresh() {
    axios.get(`${URL}?sort=-createdAt`)
      .then(res => this.setState({...this.state, description: '', list: res.data}));
  }

  render() {
    return (
      <div>
        <PageHeader name='Todo' small='Register' />
        <TodoForm description={this.state.description}
                  handleAdd={this.handleAdd}
                  handleChange={this.handleChange} />
        <TodoList list={this.state.list}
                  handleRemove={this.handleRemove} />
      </div>
    )
  }
}

export default Todo;