import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import VideoPlayer from '../../components/VidePlayer/VideoPlayer';


import styles from './VideoPage.css';
import WordTime from '../../components/WordTime/WordTime';
import Form from '../../components/UI/Form/Form';
import SearchForm from '../../components/SearchForm/SearchForm';


class VideoPage extends Component {
  state = {
    value: '',
  };

  videoRef = React.createRef();

  onInputChangeHandler = (event) => {
    const value = event.target.value;

    this.setState({
      value,
    })
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.fetchWords(this.state.value, this.props.video.id);
  };

  componentWillMount() {
    const videoId = this.props.match.params.id;
    console.log(videoId);

    this.props.fetchVideo(videoId);
  }

  componentDidMount() {
    if (!this.props.video) return;
    this.videoRef.current.currentTime = this.props.video.start;
    this.videoRef.current.autoplay = this.props.video.autoplay;
  }

  clickWordTimeItemHandler = (time) => {
    console.log("time: " + time);
    this.videoRef.current.currentTime = time;
  };

  render() {
    if (!this.props.video) return (
      <div>Loading...</div>
    );

    return (
      <div>
        <div className={styles.FormWrapper}>
          <Form
            title='Поиск по словам в текущем видео'
            placeholder='Введите поисковой запрос'
            onChange={this.onInputChangeHandler}
            onSubmit={this.onSubmitHandler}
            btnText='Найти'
            selectOpt={['video']}
            onSelectChange={null}
            alterOpt={['inDepth']}
            mainValue={'video'}
            subValue={'inDepth'}
          />
        </div>
        <div className={styles.VideoWrapper}>
          <VideoPlayer
            src={this.props.video.url}
            videoRef={this.videoRef}
            videoId={this.props.video.id}
            isAutoplay/>
        </div>
        <WordTime
          wordTimeItems={this.props.video.words}
          handleWordTimeItem={this.clickWordTimeItemHandler}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  video: state.video.currentVideo,
});

const mapDispatchToProps = (dispatch) => ({
  // wordTimeItemHandler: (time) => dispatch(actions.setVideoTime(time)),
  fetchVideo: (videoId) => dispatch(actions.fetchVideo(videoId)),
  fetchWords: (phrase, videoId) => dispatch(actions.fetchWords(phrase, videoId))
});


export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
