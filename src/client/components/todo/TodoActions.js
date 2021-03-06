import axios from 'axios';

const URL = 'http://localhost:5050/api/todos';

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
});

export const search = () =>  {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const search  = description ? `&description__regex=/${description}/` : '';
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
  }
}

export const clearSearch = () => ([{ type: 'WIPE_SEARCH_FIELD' }, search()])

export const add = description => {
  return dispatch => {
    axios.post(URL, { description })
      .then(resp => dispatch(clearSearch()))
      .then(resp => dispatch(search()))
  }
}

export const remove = todo => {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => dispatch(search()))
  }
}

export const markAsDone = todo => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, {...todo, done: true})
      .then(resp => dispatch(search()))
  }
}

export const markAsPending = todo => {
  return dispatch => {
    axios.put(`${URL}/${todo._id}`, {...todo, done: false})
      .then(resp => dispatch(search()))
  }
}

