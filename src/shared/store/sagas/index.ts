import { all, fork } from 'redux-saga/effects';

import movieSearch from '../ducks/movie/sagas';

export default function* rootSaga() {
  yield all([fork(movieSearch)]);
}
