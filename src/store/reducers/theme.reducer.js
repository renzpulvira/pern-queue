const initialThemeState = {
  themeState: false,
};

export default function themeReducer(state = false, action) {
  switch (action.type) {
    case "TOGGLE_TODO":
      return !state;
    default:
      return state;
  }
}
