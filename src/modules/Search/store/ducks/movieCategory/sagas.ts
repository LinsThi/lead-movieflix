import { all, call, takeLatest, put } from 'redux-saga/effects';

import { getCategory } from '~/modules/Search/services/categorySearch';

import { getCategorySuccessAction, getCategoryAction } from './action';
import { CategoryTypes } from './types';

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* GetCategorySagas() {
  try {
    const response: ResponseGenerator = yield call(getCategory);

    if (response.status >= 200 && response.status < 300) {
      yield put(getCategorySuccessAction(response.data.genres));
    } else {
      yield put(getCategoryAction());
    }
  } catch {
    yield put(getCategoryAction());
  }
}

export default function* watchSaga() {
  yield all([takeLatest(CategoryTypes.GET_CATEGORY, GetCategorySagas)]);
}
