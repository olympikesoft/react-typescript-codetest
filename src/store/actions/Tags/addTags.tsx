import { SET_TAG_COMMENT } from "../../../constants";
import { AppThunk } from "../../store";

  export const addTags = (tags: string[]): AppThunk => async dispatch => {
    try {
        dispatch({ type: SET_TAG_COMMENT, payload: tags });
    } catch (error) {
        console.log('error', error);
    }
};
