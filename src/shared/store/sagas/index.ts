import { all, fork } from 'redux-saga/effects';

import movieSearchComing from '~/modules/Movie/store/ducks/movieComing/sagas';
import movieSearchTrending from '~/modules/Movie/store/ducks/movieTrending/sagas';
import movieCategory from '~/modules/Search/store/ducks/movieCategory/sagas';
import movieSearch from '~/modules/Search/store/ducks/movieSearch/sagas';

export default function* rootSaga() {
  yield all([fork(movieCategory)]);
  yield all([fork(movieSearch)]);
  yield all([fork(movieSearchTrending)]);
  yield all([fork(movieSearchComing)]);
}
