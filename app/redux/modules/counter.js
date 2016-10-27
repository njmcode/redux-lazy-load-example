const initialState = {
  value: 0,
}

const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

export default function Counter (state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        value: state.value + 1,
      }
    case DECREMENT_COUNTER:
      return {
        ...state,
        value: state.value - 1,
      }
    default:
      return state
  }
}
