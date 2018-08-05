export default function user_reducer(state = 7, action) {
  switch (action.type) {
    case 'INCREMENT_USER':
      return state + 1
    case 'DECREMENT_USER':
      return state - 1
    default:
      return state
  }
}
