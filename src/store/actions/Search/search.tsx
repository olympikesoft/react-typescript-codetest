import { SET_SEARCH_TERM } from "../../../constants";

export const setSearchTerm = (term: string) => ({
  type: SET_SEARCH_TERM,
  payload: term,
});