import {NotesEntity} from "../entities/NotesEntity";
import {FIND_NOTE, ADD_NOTE} from "./NotesActions";

export interface NotesActionType {
  type: string,
  note?: NotesEntity,
  noteForSearch?: string
}

export const addNote = (note: NotesEntity): NotesActionType => {
  return {type: ADD_NOTE, note }
};

export const findNote = (noteForSearch: string): NotesActionType => {
  return {type: FIND_NOTE, noteForSearch }
};
