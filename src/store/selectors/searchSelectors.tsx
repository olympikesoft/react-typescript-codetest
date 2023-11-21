import { RootState } from "../store";

export const selectSearchTerm = (state: RootState): string => {
    return state.search?.searchTerm || '';
  };