import * as actionTypes from './actionTypes';

const fetchContractors = () => ({
    type: actionTypes.FETCH_CONTRACTORS
});

export const initContractors = () => {
    return dispatch => {
        dispatch(fetchContractors());
    }
};
