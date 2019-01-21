import { combineReducers } from 'redux';
import token from './token';
import search from './search';
import me from './me';
import artist from './artist';

export default combineReducers({
  token,
  search,
  me,
  artist,
});
