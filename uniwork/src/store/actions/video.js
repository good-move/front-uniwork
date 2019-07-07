import * as actionTypes from './actionTypes';
// import axios from "../../utils/request";

const defaultVideo = {
  id: 0,
  url: 'https://storage.yandexcloud.net/polyhack/what-is-internet.mp4',
  title: 'Яндекс практикум',
  words: [{
    word: 'Hello',
    startTime: 23,
  }, {
    word: 'World',
    startTime: 50,
  }]
};

const defaultWords = [{
  word: 'New',
  startTime: 23,
}, {
  word: 'Word',
  startTime: 50,
}, {
  word: 'Challenge',
  startTime: 70,
} ];

export const setVideoTime = (time) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SET_VIDEO_TIME,
            time
        });
    }
};

export const fetchVideo = (videoId) => {
    return dispatch => {
      dispatch({type: actionTypes.SET_VIDEO, video: defaultVideo});

        // Остается как есть!!!!
        // axios.get(`/video/${videoId}/details`)
        //     .then(response => {
        //         console.log("response");
        //         console.log(response.data);
        //         dispatch({type: actionTypes.SET_VIDEO, video: response.data});
        //     })
        //     .catch(e => console.error(e));
    }
};

export const fetchWords = (phrase, videoId) => {
    return dispatch => {

        dispatch({type: actionTypes.SET_WORDS, words: defaultWords});
        // Меняем на PUT
        // axios.get(`/search?id=${videoId}&query=${phrase}`)
        //     .then(response => {
        //         console.log(` results of /search?id=${videoId}&query=${phrase}`);
        //         console.log(response.data);
        //         dispatch({type: actionTypes.SET_WORDS, words: response.data[0].words});
        //     });
    }
};
