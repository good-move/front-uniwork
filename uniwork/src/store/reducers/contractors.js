import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    isLoading: false,
    isModalOpen: false,
    contractors: [],
    activeContractor: null,
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

const openModalContractor = (state, action) => {
    return updateObject(state, {
        isModalOpen: true,
        activeContractor: action.contractor,
    });
};

const closeModalContractor = (state, action) => {
    return updateObject(state, {
        isModalOpen: false,
        activeContractor: null,
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
        case (actionTypes.OPEN_MODAL_CONTRACTOR):
            return openModalContractor(state, action);
        case (actionTypes.CLOSE_MODAL_CONTRACTOR):
            return closeModalContractor(state, action);
        default:
            return state;
    }
}