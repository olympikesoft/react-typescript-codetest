
import { FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS, fakeApi } from "../../../constants";

export const fetchComments = (postId: number) => async (dispatch: any) => {
    dispatch({ type: FETCH_COMMENTS_REQUEST });
    try {
      const response = await fetch(`${fakeApi}/posts/${postId}/comments`);
      const data = await response.json();
      dispatch({ type: FETCH_COMMENTS_SUCCESS, payload: data });
    } catch (error) {
      console.error('Failed to get comments:', error);
      dispatch({ type: FETCH_COMMENTS_FAILURE, payload: error });
    }
  };
  