import {combineReducers} from  "redux";
import {newsReducer} from "./NewsReducer";
import {notesReducer} from "./NotesReducer";

const rootReducer = combineReducers({
  newsReducer,
  notesReducer
});

export default rootReducer;
