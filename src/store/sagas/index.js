import { all, takeLatest } from 'redux-saga/effects';

import { Types as SearchTypes } from '../ducks/search';
import {
  spotifySearchRequest,
  // spotifySearchArtist,
  // spotifySearchAlbum,
  // spotifySearchTrack,
} from './search';

export default function* rootSaga() {
  yield all([
    takeLatest(SearchTypes.GET_REQUEST, spotifySearchRequest),
    // takeLatest(SearchTypes.GET_ARTIST, spotifySearchArtist),
    // takeLatest(SearchTypes.GET_ALBUM, spotifySearchAlbum),
    // takeLatest(SearchTypes.GET_TRACK, spotifySearchTrack),
  ]);
}
