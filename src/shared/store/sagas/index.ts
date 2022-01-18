import { all, fork } from 'redux-saga/effects';

import movieSearchComing from '~/modules/Movie/store/ducks/movieComing/sagas';
import movieSearchTrending from '~/modules/Movie/store/ducks/movieTrending/sagas';

import movieSearch from '../ducks/movie/sagas';

export default function* rootSaga() {
  yield all([fork(movieSearch)]);
  yield all([fork(movieSearchTrending)]);
  yield all([fork(movieSearchComing)]);
}
