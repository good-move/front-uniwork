import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    title: 'constructor title!',
    isLoading: false,
    contractors: null,
};

const fetchContractors = (state, action) => {
    return updateObject(state, {
        isLoading: true,
    });
};

export default (state = initialState, action) => {
    switch (action.type) {
        case (actionTypes.FETCH_CONTRACTORS):
            return fetchContractors(state, action);
        default:
            return state;
    }
}