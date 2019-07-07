import * as actionTypes from './actionTypes.js';
import {SEARCH_FOR_C_NAME} from './actionTypes';

const users = [{
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

const videos = [{
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
}, {
  id: 1,
  // url: 'https://r3---sn-tt1e7n7l.googlevideo.com/videoplayback?expire=1562459698&ei=0ukgXf-FGZL9wQGBur7wCA&ip=142.93.153.198&id=o-AHvF5s5R0W8VxNX33Ew1q-a3k_6Vczj_2YNXGIbc7hFi&itag=22&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-tt1e7n7l%2Csn-ab5l6n6l&ms=au%2Conr&mv=m&mvi=2&pl=24&initcwndbps=103750&mime=video%2Fmp4&ratebypass=yes&dur=370.706&lmt=1552072225969040&mt=1562437961&fvip=3&c=WEB&txp=5535432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRAIfXdeFsSCW7KZRP098V60B_38I5VFuRq3lQfdzBS2G3gIhAOtM0uHqiWl_4ZbVhz-FVPoVHFKmep7VWwR680r7qCrn&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRgIhAKXxFJaSBJw4USB42JtJifPGuH9IBKCFQMM86dZ0ZqILAiEA9SgFMwfDHe_z1_dxA4MrpKr7qPUycDzYkbkdASzPMuk%3D&video_id=LFB1_QEnqY4&title=Алексей+Савватеев+-+Парадокс+дней+рождения',
  url: 'https://r3---sn-25ge7nsk.googlevideo.com/videoplayback?expire=1562489214&ei=Hl0hXfjADvmKmLAPte-X2Aw&ip=51.158.68.26&id=o-AMxQ5yE4EP-ogAWVEWUaPk-vlknfGb6RlR-JD2IRGVel&itag=18&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-25ge7nsk%2Csn-4g5ednsr&ms=au%2Conr&mv=m&mvi=2&pl=27&initcwndbps=2013750&mime=video%2Fmp4&gir=yes&clen=19209500&ratebypass=yes&dur=370.706&lmt=1552071672649591&mt=1562467492&fvip=3&c=WEB&txp=5531432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRgIhANxseMmgqn7uatY8dCVahPwyBeqjtv62BH9Vklj3EQwsAiEAuPes8HbWk14VzJsg6HIsynumcIwM0OTMnLUV5Oht0S8%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AHylml4wRQIgODfIQVKAlf2Iy612zTLbEDZxpKRqKnDPxk7688K4jFACIQCyyrsO3hFypEffcb37Ok5wzrnwFJzlPmQwXC51G27kTQ%3D%3D&video_id=LFB1_QEnqY4&title=Алексей+Савватеев+-+Парадокс+дней+рождения',
  title: 'Интервью с интересными людьми',
  words: [{
    word: 'Hello привет',
    startTime: 23,
  }, {
    word: 'World мир',
    startTime: 50,
  }]
}];

const fetchSearchResults = () => ({
  type: actionTypes.FETCH_SEARCH_RESULTS
});

const fetchSearchSuccess = (data) => ({
  type: actionTypes.FETCH_SEARCH_SUCCESS,
  data
});

const fetchSearchFailure = () => ({
  type: actionTypes.FETCH_SEARCH_FAILURE,
});

export const findSuggestions = (query) => {
  return (dispatch, getState) => {
    dispatch(fetchSearchResults());
    const searchState = getState().search;

    setTimeout(() => {
      if (searchState.isUserSearch) {
        dispatch(fetchSearchSuccess(users));
      } else {
        dispatch(fetchSearchSuccess(videos));
      }
    }, 2000);
  }
};

export const clearSearch = () => ({
  type: actionTypes.CLEAR_SEARCH,
});

export const updateQuery = (query) => ({
  type: actionTypes.UPDATE_QUERY,
  query
});

export const searchForUsers = () => ({
  type: actionTypes.SEARCH_FOR_USERS
});

export const searchForCourses = () => ({
  type: actionTypes.SEARCH_FOR_COURSES
});

export const searchForTopics = () => ({
  type: actionTypes.SEARCH_FOR_TOPICS
});

export const searchForOrgs = () => ({
  type: actionTypes.SEARCH_FOR_ORGS
});

export const searchForCName = () => ({
  type: actionTypes.SEARCH_FOR_C_NAME
});

export const searchForDepth = () => ({
  type: actionTypes.SEARCH_FOR_DEPTH
});



