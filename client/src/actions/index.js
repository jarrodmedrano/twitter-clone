import axios from 'axios';
import { FETCH_USER } from './types';
import { FETCH_TWEETS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitTweet = (values, history) => async dispatch => {
  const res = await axios.post('/api/tweets', values);
  history.push('/');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTweets = () => async dispatch => {
  const res = await axios.get('/api/tweets');
  console.log('response', res.data);
  dispatch({ type: FETCH_TWEETS, payload: res.data });
};
