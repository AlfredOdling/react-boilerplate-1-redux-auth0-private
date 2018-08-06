export default function login_reducer(state = 7, action) {
  switch (action.type) {
    case 'INCREMENT_LOGIN':
      return state + 1
    case 'DECREMENT_LOGIN':
      return state - 1
    default:
      return state
  }
}
