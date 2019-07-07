import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import SearchForm from '../../components/SearchForm/SearchForm';

import styles from './Search.css';
import * as actions from '../../store/actions/index';
import {Route} from 'react-router';
import UsersResults from '../../components/UsersResults/UsersResults';
import VideoResults from '../../components/VideoResults/VideoResults';

class Search extends Component {
  state = {
    main: 'courses',
    sub: 'organizations',
    options: {
      users: ['organizations', 'topics'],
      courses: ['courseName', 'inDepth'],
    }
  };

  componentWillMount() {
    this.props.clearSearch();
  }

  submitSearchFormHandler = (query) => {
    this.props.findSuggestions(query);
    if (this.props.isUsersSearch) {
      this.props.history.replace(`${this.props.match.url}/users`);
    } else {
      this.props.history.replace(`${this.props.match.url}/videos`);
    }
  };

  onMainSelectChange = (event) => {
    event.preventDefault();

    if (this.props.match.url !== 'search') {
      this.props.history.replace('/search');
    }

    if (event.target.value === 'users') {
      this.props.setUsersSearch();
      this.setState({
        main: 'users',
      });
    } else if (event.target.value === 'courses') {
      this.props.setCoursesSearch();
      this.setState({
        main: 'courses',
      });
    } else if (event.target.value === 'organizations') {
      this.props.searchForOrgs();
      this.setState({
        sub: 'organizations',
      });
    } else if (event.target.value === 'topics') {
      this.props.searchForTopics();
      this.setState({
        sub: 'topics',
      });
    } else if (event.target.value === 'courseName') {
      this.props.searchForCName();
      this.setState({
        sub: 'courseName',
      });
    } else if (event.target.value === 'inDepth') {
      this.props.searchForDepth();
      this.setState({
        sub: 'inDepth',
      });
    }
  };

  findMore = (videoId) => {
    console.log(videoId);
    this.props.history.push("/video/" + videoId);
  };

  render() {
    const alterSelect = this.props.isUsersSearch
      ? this.state.options.users
      : this.state.options.courses;

    return (
      <div className={styles.search}>
        <SearchForm
          title={'Поиск по видеокурсам и исполнителям'}
          onSubmitFormHandler={this.submitSearchFormHandler}
          selectOpt={Object.keys(this.state.options)}
          onSelectChange={this.onMainSelectChange}
          alterOpt={alterSelect}
          mainValue={this.state.main}
          subValue={this.state.sub}
        />
        <Route
          path={`${this.props.match.url}/users`}
          component={() => <UsersResults users={this.props.users}/>}
        />
        <Route
          path={`${this.props.match.url}/videos`}
          component={() => <VideoResults
            isLoading={this.props.isFetching}
            videos={this.props.videos}
            itemClickHandler={this.findMore}/>}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isUsersSearch: state.search.isUserSearch,
  users: state.search.users,
  videos: state.search.videos,
  isFetching: state.search.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
    clearSearch: () => dispatch(actions.clearSearch()),
    findSuggestions: (query) => dispatch(actions.findSuggestions(query)),
    setUsersSearch: () => dispatch(actions.searchForUsers()),
    setCoursesSearch: () => dispatch(actions.searchForCourses()),
    searchForTopics: () => dispatch(actions.searchForTopics()),
    searchForOrgs: () => dispatch(actions.searchForOrgs()),
    searchForCName: () => dispatch(actions.searchForCName()),
    searchForDepth: () => dispatch(actions.searchForDepth())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
