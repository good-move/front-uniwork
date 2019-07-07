import { combineReducers } from 'redux';

import contractors from './contractors';
import search from './search';
import video from './video.js';


export default combineReducers({
    contractors,
    search,
    video
});
