import React from "react";
import Form from "../../components/UI/Form/Form";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import styles from "./SearchForm.css";
import PropTypes from 'prop-types';

class SearchForm extends React.Component {
    onInputChangeHandler = (event) => {
        this.props.onQueryChanged(event.target.value)
    };

    submitFormHandler = (event) => {
        event.preventDefault();

        const phrase = this.props.query;
        if (!phrase) {
            return;
        }

        this.props.onSubmitFormHandler(phrase);
        // this.props.history.push('/suggestions');
    };

    render() {
        return (
            <div className={styles.formWrapper}>
                <Form
                    title={this.props.title}
                    placeholder='Введите поисковой запрос'
                    value={this.props.query}
                    onChange={this.onInputChangeHandler}
                    onSubmit={this.submitFormHandler}
                    btnText='Найти'
                    selectOpt={this.props.selectOpt}
                    onSelectChange={this.props.onSelectChange}
                    alterOpt={this.props.alterOpt}
                    mainValue={this.props.mainValue}
                    subValue={this.props.subValue}
                />
            </div>
        );
    }
}

SearchForm.propTypes = {
  title: PropTypes.string,
  query: PropTypes.string,
  onSubmitFormHandler: PropTypes.func,
  selectOpt: PropTypes.array,
  onSelectChange: PropTypes.func,
  alterOpt: PropTypes.array,
  mainValue: PropTypes.string,
  subValue: PropTypes.string,
};

const mapStateToProps = (state) => ({
    query: state.search.query,
    // phrase: state.extractor.phrase,
    // isLoading: state.extractor.isLoading,
    // suggestedVideos: state.extractor.suggestedVideos,
});

const mapDispatchToProps = (dispatch) => ({
    onQueryChanged: query => dispatch(actions.updateQuery(query)),
    // onSubmitForm: phrase => dispatch(actions.findSuggestions(phrase))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));
