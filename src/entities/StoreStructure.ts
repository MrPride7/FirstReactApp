import {NewsEntity} from "./NewsEntity";
import {NotesEntity} from "./NoteEntity";

export interface StoreStructure {
  news: NewsEntity[];
  notes: NewsEntity[];
}
