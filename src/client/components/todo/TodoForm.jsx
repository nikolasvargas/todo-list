import React, { Component } from 'react';
import Grid from '../../utils/Grid';
import BtnAndIcon from '../../utils/ButtonAndIcon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search } from './TodoActions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    if(e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
    }
  }

  componentWillMount() {
    this.props.search()
  }

  render() {
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input id="description"
                className='form-control'
                placeholder='Create your task'
                onKeyUp={this.keyHandler}
                value={this.props.description}
                onChange={this.props.changeDescription} />
        </Grid>
        <Grid cols='12 3 2'>
          <BtnAndIcon style='primary' icon='plus' disabled={this.props.disabled} onClick={this.props.handleAdd} />
          <BtnAndIcon style='info' icon='search' disabled={this.props.disabled} onClick={this.props.handleSearch} />
          <BtnAndIcon style='dark' icon='refresh' onClick={this.props.handleClearSearch} />
        </Grid>
      </div>
    ) 
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)