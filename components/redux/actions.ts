import axios from 'axios';
import * as types from './types';

export const fetchPosts = () => {
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

const getPostSuccess = (post) => ({
  type: types.GET_POST_SUCCESS,
  posts: post,
});

const getPostFailure = (error) => ({
  type: types.GET_POST_FAILURE,
  payload: {
    error,
  },
});

export const addPost = (title, body) => {
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

const addPostSuccess = (post) => ({
  type: types.ADD_POST_SUCCESS,
  payload: {
    ...post,
  },
});

const addPostStarted = () => ({
  type: types.ADD_POST_STARTED,
});

const addPostFailure = (error) => ({
  type: types.ADD_POST_FAILURE,
  payload: {
    error,
  },
});
