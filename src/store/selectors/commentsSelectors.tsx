import { Comment } from "../../interfaces";

  export const selectComments = (state: { comments: { comments: Comment[] } }, postId: number): Comment[] => {
    return state.comments.comments.filter(comment => (comment.postId).toString() === postId.toString());
};

export const selectCommentsLoading = (state: { comments: { loading: any; }; }) => state.comments.loading;

export const selectCommentsError = (state: { comments: { error: any; }; }) => state.comments.error;
