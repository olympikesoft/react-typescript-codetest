import { SET_SEARCH_TERM } from "../../constants";
import { Action, SearchState } from "../../interfaces";

const initialState: SearchState = {
  searchTerm: '',
};

export const searchReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};
