import { call, put } from 'redux-saga/effects';
import ls from 'local-storage';
import api from '../../services/api';

import { Creators as MeActions } from '../ducks/me';
import { Creators as TokenActions } from '../ducks/token';

export function* spotifyMeRequest(action) {
  try {
    // const { data } = yield call(api.get, '/me', {
    //   headers: { Authorization: `Bearer ${action.payload.token}` },
    // });
    // yield put(MeActions.successData(data));
  } catch (err) {
    // console.tron.error(err);
  }
}
