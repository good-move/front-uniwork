import React, {Component} from 'react';
import {connect} from 'react-redux';

class Contractors extends Component {
    render() {
        return (
            <div>
                Тут скоро будут заказчики
                {this.props.title}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    title: state.contractors.title,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Contractors);
