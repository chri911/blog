import axios from 'axios';
import * as types from './types';
import { AnyAction } from 'redux';
import { RootState } from './store';
import { ThunkAction } from 'redux-thunk';

type PostData = {
  body: string;
  title: string;
  id: number;
};

export const fetchPosts = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return (dispatch) => {
    dispatch(getPostStarted());

    axios
      .get('https://simple-blog-api.crew.red/posts')
      .then((res) => {
        dispatch(getPostSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getPostFailure(err.message));
      });
  };
};

const getPostStarted = () => ({
  type: types.GET_POST_STARTED,
});

const getPostSuccess = (post: PostData) => ({
  type: types.GET_POST_SUCCESS,
  posts: post,
});

const getPostFailure = (error: string) => ({
  type: types.GET_POST_FAILURE,
  payload: {
    error,
  },
});

export const addPost = (
  title: string,
  body: string,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return (dispatch) => {
    dispatch(addPostStarted());

    axios
      .post('https://simple-blog-api.crew.red/posts', {
        title,
        body,
      })
      .then((res) => {
        dispatch(addPostSuccess(res.data));
      })
      .catch((err) => {
        dispatch(addPostFailure(err.message));
      });
  };
};

const addPostSuccess = (post: PostData) => ({
  type: types.ADD_POST_SUCCESS,
  payload: {
    ...post,
  },
});

const addPostStarted = () => ({
  type: types.ADD_POST_STARTED,
});

const addPostFailure = (error: string) => ({
  type: types.ADD_POST_FAILURE,
  payload: {
    error,
  },
});
