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
    this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
    this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClearSearch = this.handleClearSearch.bind(this);
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
      .then(_ => this.refresh(this.state.description))
  }

  handleMarkAsPending(todoTask) {
    axios.put(`${URL}/${todoTask._id}`, {...todoTask, done: false})
      .then(_ => this.refresh(this.state.description));
  }

  handleMarkAsDone(todoTask) {
    axios.put(`${URL}/${todoTask._id}`, {...todoTask, done: true})
      .then(_ => this.refresh(this.state.description));
  }

  handleSearch() {
    if(this.state.description.length) this.refresh(this.state.description);
  }

  handleClearSearch() {
    this.refresh();
  }

  refresh(description = '') {
    const search  = description ? `&description__regex=/${description}/` : '';
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(res => this.setState({...this.state, description: description, list: res.data}));
  }

  render() {
    return (
      <div>
        <PageHeader name='Todo' small='Register' />
        <TodoForm description={this.state.description}
                  disabled={this.state.description.length === 0}
                  handleAdd={this.handleAdd}
                  handleChange={this.handleChange}
                  handleSearch={this.handleSearch}
                  handleClearSearch={this.handleClearSearch} />
        <TodoList list={this.state.list}
                  handleRemove={this.handleRemove}
                  handleMarkAsPending={this.handleMarkAsPending}
                  handleMarkAsDone={this.handleMarkAsDone} />
      </div>
    )
  }
}

export default Todo;