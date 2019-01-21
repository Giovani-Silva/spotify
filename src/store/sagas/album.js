import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as AlbumActions } from '../ducks/album';

export function* albumRequest(action) {
  const { id, token } = action.payload;
  try {
    const { data: tracks } = yield call(api.get, `/albums/${id}/tracks`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    yield put(AlbumActions.albumSuccess(tracks));
  } catch (err) {
    console.tron.error(err);
  }
}
