import { SET_SELECTED_POST_ID } from "../../../constants";
import { Post } from "../../../interfaces";
import { AppThunk } from "../../store";

  export const selectPost = (post: Post): AppThunk => async dispatch => {
    try {
        dispatch({ type: SET_SELECTED_POST_ID, payload: post });
    } catch (error) {
        console.log('error', error);
    }
};
