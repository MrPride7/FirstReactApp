import {StoreStructure} from "../entities/StoreStructure";
import {AddNoteActionType, FindNoteActionType} from "../actions/NotesActionTypes";
import {ADD_NOTE, FIND_NOTE} from "../actions/NotesActions";

const initialState: StoreStructure = {
  notes: [],
  noteForSearch: ""
};

type noteActionType = AddNoteActionType | FindNoteActionType;

export const notesReducer = (state: StoreStructure = initialState, action: noteActionType ): StoreStructure => {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: [
          ...state.notes, // без "downlevelIteration": true в конфиге - не работае
          action.note
        ]
      }
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

