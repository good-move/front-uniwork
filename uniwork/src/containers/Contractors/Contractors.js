import React, {Component} from 'react';
import {connect} from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';
import ContractorsList from '../../components/ContractorsList/ContractorsList';
import Modal from '../../components/UI/Modal/Modal';
import ContractorInfo from '../../components/ContractorsList/ContractorInfo/ContractorInfo';

import * as actions from '../../store/actions/index';

class Contractors extends Component {
    componentWillMount() {
        this.props.onContractorsInit();
    }

    openContractorHandler = (event, login) => {
        event.preventDefault();
        const contractor = this.props.contractors.find(contractor => contractor.login === login);

        this.props.onOpenContractor(contractor);
    };

    contactPersonHandler = (event) => {
        event.preventDefault();
        const login = this.props.activeContractor.login;

        console.log('[СВЯЗЫВАЕМСЯ С ]' + login);
    };

    render() {
        let contractorsList = <ContractorsList
            contractors={this.props.contractors}
            handleOpenContractor={this.openContractorHandler}/>;
        if (this.props.isLoading) {
            contractorsList = <Spinner/>;
        }

        return (
            <div>
                <Modal
                    isShown={this.props.isShown}
                    handleCloseModal={this.props.onModalClose}>
                    {this.props.activeContractor ?
                        <ContractorInfo
                            onClick={this.contactPersonHandler}
                            {...this.props.activeContractor} />
                        : null
                    }
                </Modal>
                <h2>Исполнители</h2>
                {contractorsList}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    contractors: state.contractors.contractors,
    isLoading: state.contractors.isLoading,
    isShown: state.contractors.isModalOpen,
    activeContractor: state.contractors.activeContractor,
});

const mapDispatchToProps = (dispatch) => ({
    onContractorsInit: () => dispatch(actions.initContractors()),
    onModalClose: () => dispatch(actions.closeModalContractor()),
    onOpenContractor: (contractor) => dispatch(actions.openModalContractor(contractor)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contractors);
