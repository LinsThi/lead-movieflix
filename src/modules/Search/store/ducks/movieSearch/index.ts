import type { Reducer } from 'redux';

import type { MovieState } from './types';
import { MovieTypes } from './types';

const INITIAL_STATE: MovieState = {
  listMovies: [],
  getLoading: false,
  errorGetMovies: false,
};

const reducer: Reducer<MovieState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case MovieTypes.GET_MOVIES:
      return {
        ...state,
        getLoading: true,
      };
    case MovieTypes.GET_MOVIES_SUCCESS:
      return {
        ...state,
        listMovies: payload.listMovies,
        getLoading: false,
      };
    case MovieTypes.GET_MOVIES_ERROR:
      return {
        ...state,
        getLoading: false,
        errorGetMovies: true,
      };
    default:
      return state;
  }
};

export default reducer;
