import { combineReducers } from 'redux';
import token from './token';
import search from './search';

export default combineReducers({
  token,
  search,
});
