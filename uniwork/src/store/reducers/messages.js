import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
  message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.SET_MESSAGE):
      return updateObject(state, {
        message: action.message,
      });
    case (actionTypes.CLEAR_MESSAGE):
      return updateObject(state, {
        message: '',
      });
    default: return state;
  }
}
