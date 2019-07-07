import { combineReducers } from 'redux';

import contractors from './contractors';
import search from './search';

export default combineReducers({
    contractors,
    search,
});
