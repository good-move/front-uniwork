import React, {Component} from 'react';
import {connect} from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions/index';
import ContractorsList from '../../components/ContractorsList/ContractorsList';

class Contractors extends Component {
    componentWillMount() {
        this.props.onContractorsInit();
    }

    render() {
        let contractorsList = <ContractorsList contractors={this.props.contractors}/>;
        if (this.props.isLoading) {
            contractorsList = <Spinner/>;
        }

        return (
            <div>
                <h2>Исполнители</h2>
                {contractorsList}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    contractors: state.contractors.contractors,
    isLoading: state.contractors.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
    onContractorsInit: () => dispatch(actions.initContractors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contractors);
