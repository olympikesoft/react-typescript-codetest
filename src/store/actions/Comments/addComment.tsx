import { ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, fakeApi } from "../../../constants";

export const addComment = (postId: number, commentText: string, userName?: string, userEmail?: string) => async (dispatch: any) => {
    dispatch({ type: ADD_COMMENT_REQUEST });

    try {
      const newComment = {
        postId,
        body: commentText,
        name: userName || 'Anonymous',
        email: userEmail || 'no-reply@example.com',
      };

      const response = await fetch(`${fakeApi}/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      dispatch({ type: ADD_COMMENT_SUCCESS, payload: data });
    } catch (error) {
      console.error('Failed to add comment:', error);
      dispatch({ type: ADD_COMMENT_FAILURE, payload: error });
    }
};
