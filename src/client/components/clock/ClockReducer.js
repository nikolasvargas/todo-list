const INITIAL_STATE = {
  seconds: '00',
  minutes: ''
}

const TIMER = {
  START: 'START_TIMER',
  STOP: 'STOP_TIMER'
}

const clockReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case TIMER.START:
      return state
    case TIMER.STOP:
      return state
    default:
      return state
  }
}

export default clockReducer;
