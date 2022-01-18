import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { searchMoviesComing } from '~/modules/Movie/services/movies';

import {
  getMoviesComingSuccessAction,
  getMoviesComingErrorAction,
} from './action';
import type { GetMoviesComingProps } from './types';
import { MovieComingTypes } from './types';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* GetMoviesComingSagas(action: GetMoviesComingProps) {
  try {
    const response: ResponseGenerator = yield call(
      searchMoviesComing,
      action.payload.page,
    );

    if (response.status >= 200 && response.status < 300) {
      const { listMoviesComing } = yield select(
        (state: AplicationState) => state.movieComing,
      );

      let allMovies = [];

      if (action.payload.page === 1) {
        allMovies = response.data;
      } else {
        allMovies = listMoviesComing;
        allMovies.page = action.payload.page;
        allMovies.results = [
          ...listMoviesComing.results,
          ...response.data.results,
        ];
      }

      yield put(getMoviesComingSuccessAction(allMovies));
    } else {
      yield put(getMoviesComingErrorAction());
    }
  } catch {
    yield put(getMoviesComingErrorAction());
  }
}

export default function* watchSaga() {
  yield all([
    takeLatest(MovieComingTypes.GET_MOVIES_COMING, GetMoviesComingSagas),
  ]);
}
