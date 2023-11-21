import { ADD_REPLY_REQUEST, ADD_REPLY_SUCCESS, ADD_REPLY_FAILURE } from '../../../constants';
import { AppThunk } from '../../store';
import { Reply } from '../../../interfaces'; // Ensure you have this import

/**
 */
export const addReply = (
  commentId: number, 
  replyText: string, 
  userName?: string, 
  userEmail?: string
): AppThunk => async dispatch => {
  dispatch({ type: ADD_REPLY_REQUEST });

  try {
    /*fake data*/
    const newReply: Reply = {
      id: Date.now(), 
      postId: commentId, 
      body: replyText,
      name: 'userName',
      email: 'userEmail',
      userImage: 'image.jpg', 
      createdAt: new Date(),
    };

    dispatch({
      type: ADD_REPLY_SUCCESS,
      payload: { commentId, reply: newReply },
    });
  } catch (error) {
    console.error('Failed to add reply:', error);
    dispatch({ type: ADD_REPLY_FAILURE, payload: error });
  }
};
