let default_state = {
  open_data: 'default value',
  protected_data: {
    email: 'none '
  }
}

export default function user_reducer(state = default_state, action) {
  switch (action.type) {
    case 'OPEN_REQUEST':
      return {...state, open_data: action.payload}
    case 'PROTECTED_REQUEST':
      return {...state, protected_data: action.payload}
    default:
      return state
  }
}
