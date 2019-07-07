import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
  isUserSearch: true,
  query: '',
  isSearchedByOrgs: true,
  isSearchedByCoursename: true,
  users: [],
  videos: [],
  isFetching: false,
};

const searchForUsers = (state, action) => {
  return updateObject(state, {
    isUserSearch: true,
  });
};

const searchForCourses = (state, action) => {
  return updateObject(state, {
    isUserSearch: false,
  });
};

const updateQuery = (state, action) => {
  return updateObject(state, {
    query: action.query,
  });
};

const clearSearch = (state, action) => {
  return updateObject(state, {
    ...initialState
  });
};

const fetchSearchResults = (state, action) => {
  return updateObject(state, {
    isFetching: true,
  });
};

const fetchSearchSuccess = (state, action) => {
  if (state.isUserSearch) {
    return updateObject(state, {
      isFetching: false,
      query: '',
      users: action.data,
    });
  } else {
    return updateObject(state, {
      isFetching: false,
      query: '',
      videos: action.data,
    });
  }
};

const searchForTopics = (state, action) => {
  return updateObject(state, {
    isSearchedByOrgs: false,
  });
};

const searchForOrgs = (state, action) => {
  return updateObject(state, {
    isSearchedByOrgs: true,
  });
};

const searchForCName = (state, action) => {
  return updateObject(state, {
    isSearchedByCoursename: true,
  });
};

const searchForDepth = (state, action) => {
  return updateObject(state, {
    isSearchedByCoursename: false,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case (actionTypes.SEARCH_FOR_USERS):
      return searchForUsers(state, action);
    case (actionTypes.SEARCH_FOR_COURSES):
      return searchForCourses(state, action);
    case (actionTypes.UPDATE_QUERY):
      return updateQuery(state, action);
    case (actionTypes.CLEAR_SEARCH):
      return clearSearch(state, action);
    case (actionTypes.FETCH_SEARCH_RESULTS):
      return fetchSearchResults(state, action);
    case (actionTypes.FETCH_SEARCH_SUCCESS):
      return fetchSearchSuccess(state, action);
    case (actionTypes.FETCH_SEARCH_FAILURE):
      return clearSearch(state, action);
    case (actionTypes.SEARCH_FOR_TOPICS):
      return searchForTopics(state, action);
    case (actionTypes.SEARCH_FOR_ORGS):
      return searchForOrgs(state, action);
    case (actionTypes.SEARCH_FOR_C_NAME):
      return searchForCName(state, action);
    case (actionTypes.SEARCH_FOR_DEPTH):
      return searchForDepth(state, action);
    default: return state;
  }
};
