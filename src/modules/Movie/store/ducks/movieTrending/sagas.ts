import { all, call, takeLatest, put } from 'redux-saga/effects';

import { searchMoviesTrending } from '~/modules/Movie/services/movies';

import {
  getMoviesTrendingErrorAction,
  getMoviesTrendingSuccessAction,
} from './action';
import { MovieTrendingTypes } from './types';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* GetMoviesTrendingSagas() {
  try {
    const response: ResponseGenerator = yield call(searchMoviesTrending);

    if (response.status >= 200 && response.status < 300) {
      yield put(getMoviesTrendingSuccessAction(response.data));
    } else {
      yield put(getMoviesTrendingErrorAction());
    }
  } catch {
    yield put(getMoviesTrendingErrorAction());
  }
}

export default function* watchSaga() {
  yield all([
    takeLatest(MovieTrendingTypes.GET_MOVIES_TRENDING, GetMoviesTrendingSagas),
  ]);
}
