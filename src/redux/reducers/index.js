import authReducer from "./authReducer";
import fileFolderReducer from "../reducers/fileFolderReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ 
    auth: authReducer, 
    filefolders: fileFolderReducer,
 })

 export default rootReducer;