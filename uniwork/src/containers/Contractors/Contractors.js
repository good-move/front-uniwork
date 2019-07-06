import React, {Component} from 'react';
import {connect} from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions/index';

class Contractors extends Component {
    componentWillMount() {
        this.props.onContractorsInit();
    }

    render() {
        return (
            <div>
                Тут скоро будут заказчики
                {this.props.title}
                <Spinner/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    title: state.contractors.title,
});

const mapDispatchToProps = (dispatch) => ({
    onContractorsInit: () => dispatch(actions.initContractors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contractors);
