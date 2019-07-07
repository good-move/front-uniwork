import { combineReducers } from 'redux';

import contractors from './contractors';
import search from './search';
import video from './video';
import messages from './messages';


export default combineReducers({
    contractors,
    search,
    video,
    messages,
});
