import { all, call, takeLatest, put, select } from 'redux-saga/effects';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { searchMovies } from '~/modules/Search/services/moviesSearch';

import { getMoviesErrorAction, getMoviesSuccessAction } from './action';
import type { GetMoviesProps } from './types';
import { MovieTypes } from './types';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* GetMoviesSagas(action: GetMoviesProps) {
  try {
    const { categorySelected } = yield select(
      (state: AplicationState) => state.movieCategory,
    );

    const response: ResponseGenerator = yield call(
      searchMovies,
      action.payload.query,
      action.payload.page,
      categorySelected.name,
    );

    if (response.status >= 200 && response.status < 300) {
      const { listMovies } = yield select(
        (state: AplicationState) => state.movieSearch,
      );

      let allMovies = [];

      if (action.payload.page === 1) {
        allMovies = response.data;
      } else {
        allMovies = listMovies;
        allMovies.page = action.payload.page;
        allMovies.results = [...listMovies.results, ...response.data.results];
      }

      yield put(getMoviesSuccessAction(allMovies));
    } else {
      yield put(getMoviesErrorAction());
    }
  } catch {
    yield put(getMoviesErrorAction());
  }
}

export default function* watchSaga() {
  yield all([takeLatest(MovieTypes.GET_MOVIES, GetMoviesSagas)]);
}
