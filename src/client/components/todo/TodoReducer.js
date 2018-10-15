const TYPE = {
  DESCRIPTION_CHANGED: 'DESCRIPTION_CHANGED',
  TODO_SEARCHED: 'TODO_SEARCHED'
}

const todoReducer = (state = {}, action) => {
  switch(action.type) {
    case TYPE.DESCRIPTION_CHANGED:
      return { ...state, description: action.payload }
    case TYPE.TODO_SEARCHED:
      return { ...state, list: action.payload.data }
    default:
      return state
  }
}

export default todoReducer