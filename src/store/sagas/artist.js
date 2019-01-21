import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as ArtistActions } from '../ducks/artist';

export function* artistRequest(action) {
  const { id, token } = action.payload;
  try {
    const { data: info } = yield call(api.get, `/artists/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const { data: albums } = yield call(api.get, `/artists/${id}/albums`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    yield put(ArtistActions.successData(info, albums));
  } catch (err) {
    console.tron.error(err);
  }
}
