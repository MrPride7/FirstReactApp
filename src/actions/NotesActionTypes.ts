import {NewsEntity} from "../entities/NewsEntity";
import {FETCH_NEWS} from "./NewsActions";

export interface NewsActionType {
  type: string,
  news: NewsEntity[]
}

export const fetchNews = (): NewsActionType => {
  return {type: FETCH_NEWS, news: }
};
