import React from 'react';
import Grid from '../../utils/Grid';
import BtnAndIcon from '../../utils/ButtonAndIcon';

export default props => {
  const keyHandler = (e) => {
    if(e.key === 'Enter') {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    }
  }

  return (
    <div role='form' className='todoForm'>
      <Grid cols='12 9 10'>
        <input id="description"
              className='form-control'
              placeholder='Create your task'
              onKeyUp={keyHandler}
              value={props.description}
              onChange={props.handleChange} />
      </Grid>
      <Grid cols='12 3 2'>
        <BtnAndIcon style='primary' icon='plus' disabled={props.disabled} onClick={props.handleAdd} />
        <BtnAndIcon style='info' icon='search' disabled={props.disabled} onClick={props.handleSearch} />
        <BtnAndIcon style='dark' icon='refresh' onClick={props.handleClearSearch} />
      </Grid>
    </div>
  )
}