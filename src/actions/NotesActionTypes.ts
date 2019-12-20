import {NotesEntity} from "../entities/NoteEntity";
import {FIND_NOTE, ADD_NOTE} from "./NotesActions";

export interface NotesActionType {
  type: string,
  note: NotesEntity
}

export const addNote = (note: NotesEntity): NotesActionType => {
  return {type: ADD_NOTE, note }
};
