import { Post } from "../../interfaces";

export const selectPosts = (state: { posts: { posts: Post[]; }; }): Post[] => {
    return state.posts.posts || [];
};

export const selectPostsLoading = (state: { posts: { loading: any; }; }) => state.posts.loading;
export const selectPostsError = (state: { posts: { error: any; }; }) => state.posts.error;
