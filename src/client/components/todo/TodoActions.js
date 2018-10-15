import axios from 'axios';

const URL = 'http://localhost:5050/api/todos';

export const changeDescription = (event) => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
});

export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}