const INITIAL_STATE = {
  description: '',
  list: []
}
const TYPE = {
  DESCRIPTION_CHANGED: 'DESCRIPTION_CHANGED',
  TODO_SEARCHED: 'TODO_SEARCHED',
  WIPE_SEARCH_FIELD: 'WIPE_SEARCH_FIELD'
}

const todoReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TYPE.DESCRIPTION_CHANGED:
      return { ...state, description: action.payload }
    case TYPE.TODO_SEARCHED:
      return { ...state, list: action.payload }
    case TYPE.WIPE_SEARCH_FIELD:
      return { ...state, description: '' }
    default:
      return state
  }
}

export default todoReducer