import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_REPLY_SUCCESS, FETCH_COMMENTS_FAILURE, FETCH_COMMENTS_REQUEST, FETCH_COMMENTS_SUCCESS } from "../../constants";
import { Action, Comment } from "../../interfaces";

const initialState = {
    comments: [],
    loading: false,
    error: null,
};

const commentsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case FETCH_COMMENTS_REQUEST:
            return { ...state, loading: true };
        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                loading: false,
            };

        case FETCH_COMMENTS_FAILURE:
            return { ...state, loading: false, error: action.payload };

        case ADD_REPLY_SUCCESS:
            const { commentId, reply } = action.payload;

            const updatedComments: Comment[] = state.comments.map((comment: Comment) => {
                if (comment.id === commentId) {
                    return {
                        ...comment,
                        replies: [...(comment.replies || []), reply],
                    };
                }
                return comment;
            });

            return {
                ...state,
                comments: updatedComments,
            };

        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                comments: [...state.comments, action.payload],
                loading: false,
            };

        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default commentsReducer;
