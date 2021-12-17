import { combineReducers } from "redux";

import themeReducer from "./theme.reducer";
import userReducer from "./user.reducer";
import queueReducer from "./queue.reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  user: userReducer,
  queue: queueReducer,
});

export default rootReducer;
