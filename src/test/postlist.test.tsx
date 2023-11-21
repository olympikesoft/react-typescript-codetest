/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ListPost from '../containers/ListPost/ListPost';
import thunk from 'redux-thunk';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const mockPosts = [
  { id: 1, title: 'Post 1', body: 'This is a mock post', userId: 1 },
];

const mockUsers = [
  { id: 1, name: 'User 1', username: 'user1', email: 'user1@example.com' },
];

const initialState = {
  posts: {
    data: mockPosts, 
    loading: false,
    error: null
  },
  users: {
    data: mockUsers, 
    loading: false,
    error: null
  },
};

const store = mockStore(initialState);

describe('InitialPage', () => {
  it('renders without crashing and displays posts', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <ListPost />
      </Provider>
    );

    const searchInput = screen.getByLabelText(/search posts/i);
    expect(searchInput).toBeInTheDocument();


    expect(asFragment()).toMatchSnapshot();
  });
});
