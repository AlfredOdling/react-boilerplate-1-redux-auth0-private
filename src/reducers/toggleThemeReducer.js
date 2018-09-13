const defaultState = {
  isDarkMode: false,
}

export default function toggleThemeReducer(state = defaultState, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { ...state, isDarkMode: !state.isDarkMode }
    default:
      return state
  }
}
