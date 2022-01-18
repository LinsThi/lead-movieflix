import type { Reducer } from 'redux';

import type { MovieComingState } from './types';
import { MovieComingTypes } from './types';

const INITIAL_STATE: MovieComingState = {
  listMoviesComing: [],
  isLoading: false,
  errorGetMoviesComing: false,
};

const reducer: Reducer<MovieComingState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case MovieComingTypes.GET_MOVIES_COMING:
      return {
        ...state,
        isLoading: true,
      };
    case MovieComingTypes.GET_MOVIES_COMING_SUCCESS:
      return {
        ...state,
        listMoviesComing: payload.listMoviesComing,
        isLoading: false,
      };
    case MovieComingTypes.GET_MOVIES_COMING_ERROR:
      return {
        ...state,
        isLoading: false,
        errorGetMoviesComing: true,
      };
    default:
      return state;
  }
};

export default reducer;
