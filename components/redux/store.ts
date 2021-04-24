import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as types from './types';
import { createWrapper } from 'next-redux-wrapper';

export type RootState = ReturnType<typeof reducer>;

const initial = {
  posts: [],
  error: null,
};

const reducer = (state = initial, action) => {
  switch (action.type) {
    case types.ADD_POST_STARTED:
    case types.GET_POST_STARTED:
      return {
        ...state,
      };
    case types.ADD_POST_SUCCESS:
      return {
        ...state,
        error: null,
        posts: [...state.posts, action.payload],
      };
    case types.GET_POST_SUCCESS:
      return {
        ...state,
        error: null,
        posts: [...action.posts],
      };
    case types.ADD_POST_FAILURE:
    case types.GET_POST_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

const makeStore = (context) =>
  createStore(reducer, applyMiddleware(thunkMiddleware));

export const wrapper = createWrapper(makeStore, { debug: true });
