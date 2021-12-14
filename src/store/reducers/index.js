import { combineReducers } from "redux";

import themeReducer from "./theme.reducer";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
});

export default rootReducer;
