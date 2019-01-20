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

    // const normalized = yield call(mergeData(type, data))

    yield put(SearchActions.successData(types[selectedType], data));
  } catch (err) {
    ls.remove('token');
    yield put(TokenActions.clearToken());
  }
}

// function* mergeData(type, data) {
//   switch(type){
//     case 'artist':
//     return data.items.map( artists => { name: })
//   }
// }

export function* spotifySearchArtist(action) {
  const { query, token } = action.payload;
  try {
    const data = yield call(api.get, `/search?q=${query}&type=artist`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(SearchActions.successData(data));
  } catch (err) {
    console.tron.error(err);
  }
}

export function* spotifySearchAlbum(action) {
  const { query, token } = action.payload;
  try {
    const data = yield call(api.get, `/search?q=${query}&type=album`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(SearchActions.successData(data));
  } catch (err) {
    console.tron.error(err);
  }
}

export function* spotifySearchTrack(action) {
  const { query, token } = action.payload;
  try {
    const data = yield call(api.get, `/search?q=${query}&type=track`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(SearchActions.successData(data));
  } catch (err) {
    console.tron.error(err);
  }
}
