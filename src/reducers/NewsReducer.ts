import {StoreStructure} from "../entities/StoreStructure";
import {NewsActionType} from "../actions/NewsActionTypes";
import {FETCH_NEWS} from "../actions/NewsActions";

const initialState: StoreStructure = {
  news: []
};

export const newsReducer = (state: StoreStructure = initialState, action: NewsActionType ) => {
  switch (action.type) {
    case FETCH_NEWS: {
      return {
        ...state,
        news: action.news
      } as StoreStructure
    }
  }
  return state;
};
