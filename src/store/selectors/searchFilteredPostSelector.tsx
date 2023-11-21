import { Post, searchFilterState } from "../../interfaces";

export const selectFilteredPosts = (state: searchFilterState, searchTerm: string): Post[] => {
    const searchTermLower = searchTerm.toLowerCase();
  
    const matchingUserIds = state.users
      .filter(user => user.username.toLowerCase().includes(searchTermLower))
      .map(user => user.id);
  
    return state.posts.filter(post =>
      matchingUserIds.includes(parseInt(post.userId)) ||
      post.body.toLowerCase().includes(searchTermLower) ||
      post.userId.toString().includes(searchTerm)
    );
  };