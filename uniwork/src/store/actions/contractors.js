import * as actionTypes from './actionTypes';

const data = [{
    id: 1,
    login: 'katarinish',
    first_name: 'Yekaterina',
    middle_name: 'Vyacheslavovna',
    last_name: 'Kovylina',
    birth_date: '1997/04/11',
    education: 'ФИТ НГУ',
    organization: 'Яндекс Маркет Лаб.',
    type: 'Исполнитель',
    skills: [{
        id: 0,
        topicType: 'программирование'
    }, {
        id: 1,
        topicType: 'математика'
    }]
},{
    id: 2,
    login: 'katarinish2',
    first_name: 'Kate',
    middle_name: 'Vyacheslavovna',
    last_name: 'Kovylina',
    birth_date: '1997/04/11',
    education: 'ФИТ НГУ выпуск 2020',
    organization: 'Яндекс Маркет Лаб.',
    type: 'Исполнитель',
    skills: [{
        id: 0,
        topicType: 'программирование'
    }, {
        id: 2,
        topicType: 'теория алгоритмов'
    }]
}];

const fetchContractors = () => ({
    type: actionTypes.FETCH_CONTRACTORS
});

const fetchContractorsSuccess = (contractors) => ({
   type: actionTypes.FETCH_CONTRACTORS_SUCCESS,
   contractors,
});

const fetchContractorsFailure = () => ({
   type: actionTypes.FETCH_CONTRACTORS_FAILURE,
});

export const closeModalContractor = () => ({
    type: actionTypes.CLOSE_MODAL_CONTRACTOR
});

export const openModalContractor = (contractor) => ({
    type: actionTypes.OPEN_MODAL_CONTRACTOR,
    contractor
});

export const initContractors = () => {
    return dispatch => {
        dispatch(fetchContractors());
        setTimeout(() => {
            dispatch(fetchContractorsSuccess(data));
        }, 2000);
    }
};
