import {NewsEntity} from "./NewsEntity";
import {NotesEntity} from "./NotesEntity";

export interface StoreStructure {
  news?: NewsEntity[];
  notes?: NotesEntity[];
  noteForSearch?: string
}

