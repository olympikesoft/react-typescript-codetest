import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, SET_SELECTED_POST_ID } from "../../constants";
import { Action } from "../../interfaces";

const initialState = {
    posts: [],
    selectedPost: null,
    loading: false,
    error: null,
  };
  
  function postsReducer(state = initialState, action: Action) {
    switch (action.type) {
      case FETCH_POSTS_REQUEST:
        return { ...state, loading: true };
      case FETCH_POSTS_SUCCESS:
        return { ...state, loading: false, posts: action.payload };
      case FETCH_POSTS_FAILURE:
        return { ...state, loading: false, error: action.payload };
      case SET_SELECTED_POST_ID:
          return {
            ...state,
            selectedPost: action.payload,
          };
      default:
        return state;
    }
  }
  
  export default postsReducer;
  