import * as actionTypes from './actionTypes';

export const setMessage = (message) => ({
  type: actionTypes.SET_MESSAGE,
  message,
});

export const clearMessage = () => ({
  type: actionTypes.CLEAR_MESSAGE,
});

export const sendMessage = (message) => {
  return dispatch => {
    dispatch(clearMessage());
  }
};
