import React from 'react';
import Grid from '../../utils/Grid';

export default props => (
  <div role='form' className='todoForm'>
    <Grid cols='12 9 10'>
      <input id="description" className='form-control' placeholder='Create your task' />
    </Grid>
    <Grid cols='12 3 2'>
      <button className='btn btn-primary'>
        <i className='fa fa-plus' />
      </button>
    </Grid>
  </div>
)