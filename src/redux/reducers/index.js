import { combineReducers } from "redux";

import authReducer from "./authReducer";
import fileFolderReducer from "./fileFolderReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  filefolders: fileFolderReducer,
});

export default rootReducer;