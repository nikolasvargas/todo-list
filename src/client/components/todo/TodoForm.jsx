import React from 'react';
import Grid from '../../utils/Grid';
import BtnAndIcon from '../../utils/ButtonAndIcon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeDescription, search, add, clearSearch } from './TodoActions';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.keyHandler = this.keyHandler.bind(this);
  }

  keyHandler(e) {
    const { add, search, description, clearSearch } = this.props;
    if(e.key === 'Enter' && description.length) e.shiftKey ? search() : add(description);
    if(e.key === 'Escape' && description.length) clearSearch();
  }

  componentWillMount() {
    this.props.search()
  }

  render() {
    const { add, search, description, clearSearch } = this.props;
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
          <BtnAndIcon style='primary' icon='plus'
            disabled={description.length === 0}
            onClick={() => add(description)} />
          <BtnAndIcon style='info' icon='search'
            disabled={description.length === 0}
            onClick={search} />
          <BtnAndIcon style='dark' icon='refresh'
            onClick={clearSearch} />
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ changeDescription, search, add, clearSearch }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
