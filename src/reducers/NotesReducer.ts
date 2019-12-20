import {StoreStructure} from "../entities/StoreStructure";
import {NotesActionType} from "../actions/NotesActionTypes";
import {ADD_NOTE} from "../actions/NotesActions";

const initialState: StoreStructure = {
  news: [],
  notes: []
};

export const notesReducer = (state: StoreStructure = initialState, action: NotesActionType ) => {
  switch (action.type) {
    case ADD_NOTE: {
      return {
        ...state,
        notes: [
          ...state.notes,
          action.note
        ]
      } as StoreStructure
    }
  }
  return state;
};
