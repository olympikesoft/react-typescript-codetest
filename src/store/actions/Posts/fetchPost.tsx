import { FETCH_POSTS_REQUEST, fakeApi, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILURE } from "../../../constants";
import { AppThunk } from "../../store";

export const fetchPosts = (): AppThunk => async dispatch => {
    dispatch({ type: FETCH_POSTS_REQUEST });
    try {
        const response = await fetch(fakeApi + '/posts');
        const data = await response.json();
        dispatch({ type: FETCH_POSTS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_POSTS_FAILURE, payload: error });
    }
};
