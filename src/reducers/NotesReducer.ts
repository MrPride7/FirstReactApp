import {StoreStructure} from "../entities/StoreStructure";
import {NotesActionType} from "../actions/NotesActionTypes";
import {ADD_NOTE, FIND_NOTE} from "../actions/NotesActions";

const initialState: StoreStructure = {
  notes: [],
  noteForSearch: ""
};

export const notesReducer = (state: StoreStructure = initialState, action: NotesActionType ) => {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: [
          ...state.notes, // без этого "downlevelIteration": true в конфиге не работае
          action.note
        ]
      } as StoreStructure
    }
    case FIND_NOTE: {
      return {
        ...state,
        noteForSearch: action.noteForSearch
      }
    }
  }
  return state;
};

