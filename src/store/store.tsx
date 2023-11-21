import { createStore, applyMiddleware, combineReducers, Action } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import postsReducer from './reducers/postsReducer';
import commentsReducer from './reducers/commentsReducer';
import { searchReducer } from './reducers/searchReducer';
import usersReducer from './reducers/usersReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  search: searchReducer,
  users: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = ThunkDispatch<RootState, unknown, Action>;

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
