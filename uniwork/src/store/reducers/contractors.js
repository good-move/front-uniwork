import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    isLoading: false,
    contractors: [],
};

const fetchContractors = (state, action) => {
    return updateObject(state, {
        isLoading: true,
    });
};

const fetchContractorsSuccess = (state, action) => {
    return updateObject(state, {
        isLoading: false,
        contractors: action.contractors,
    });
};

const fetchContractorsFailure = (state, action) => {
    return updateObject(state, {
        isLoading: false,
    });
};

export default (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.FETCH_CONTRACTORS):
            return fetchContractors(state, action);
        case (actionTypes.FETCH_CONTRACTORS_SUCCESS):
            return fetchContractorsSuccess(state, action);
        case (actionTypes.FETCH_CONTRACTORS_FAILURE):
            return fetchContractorsFailure(state, action);
        default:
            return state;
    }
}