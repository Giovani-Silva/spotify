import { all, takeLatest } from 'redux-saga/effects';

import { Types as SearchTypes } from '../ducks/search';
import { spotifySearchRequest } from './search';
import { Types as MeTypes } from '../ducks/me';
import { spotifyMeRequest } from './me';
import { Types as ArtistTypes } from '../ducks/artist';
import { artistRequest } from './artist';
import { Types as AlbumTypes } from '../ducks/album';
import { albumRequest } from './album';

export default function* rootSaga() {
  yield all([
    takeLatest(SearchTypes.GET_REQUEST, spotifySearchRequest),
    takeLatest(MeTypes.GET_REQUEST, spotifyMeRequest),
    takeLatest(ArtistTypes.GET_REQUEST, artistRequest),
    takeLatest(AlbumTypes.GET_REQUEST, albumRequest),
  ]);
}
