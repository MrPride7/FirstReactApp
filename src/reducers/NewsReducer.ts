import {StoreStructure} from "../entities/StoreStructure";
import {FetchNewsActionType} from "../actions/NewsActionTypes";
import {FETCH_NEWS} from "../actions/NewsActions";

const initialState: StoreStructure = {
  news: []
};

export const newsReducer = (state: StoreStructure = initialState, action: FetchNewsActionType ): StoreStructure => {
  switch (action.type) {
    case FETCH_NEWS: {
      return {
        ...state,
        news: action.news
      }
    }
  }
  return state;
};
