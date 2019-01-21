import { call, put } from 'redux-saga/effects';
import ls from 'local-storage';
import api from '../../services/api';

import { Creators as SearchActions } from '../ducks/search';
import { Creators as TokenActions } from '../ducks/token';

export function* spotifySearchRequest(action) {
  const {
    selectedType, types, query, token,
  } = action.payload;
  try {
    const { data } = yield call(api.get, `/search?q=${query}&type=${selectedType}&market=BR`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    yield put(SearchActions.successData(types[selectedType], data));
  } catch (err) {
    ls.remove('token');
    yield put(TokenActions.clearToken());
  }
}
