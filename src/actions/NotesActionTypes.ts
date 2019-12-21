import {NotesEntity} from "../entities/NotesEntity";
import {FIND_NOTE, ADD_NOTE} from "./NotesActions";

export interface AddNoteActionType {
  type: typeof ADD_NOTE,
  note: NotesEntity,
}

export interface FindNoteActionType {
  type: typeof FIND_NOTE,
  noteForSearch?: string
}

export const addNote = (note: NotesEntity): AddNoteActionType => {
  return {type: ADD_NOTE, note }
};

export const findNote = (noteForSearch: string): FindNoteActionType => {
  return {type: FIND_NOTE, noteForSearch }
};
