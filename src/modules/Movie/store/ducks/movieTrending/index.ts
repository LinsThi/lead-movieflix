import type { Reducer } from 'redux';

import type { MovieTrendingState } from './types';
import { MovieTrendingTypes } from './types';

const INITIAL_STATE: MovieTrendingState = {
  listMoviesTrending: [],
  isLoading: false,
  errorGetMoviesTrending: false,
};

const reducer: Reducer<MovieTrendingState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case MovieTrendingTypes.GET_MOVIES_TRENDING:
      return {
        ...state,
        isLoading: true,
      };
    case MovieTrendingTypes.GET_MOVIES_TRENDING_SUCCESS:
      return {
        ...state,
        listMoviesTrending: payload.listMoviesTrending,
        isLoading: false,
      };
    case MovieTrendingTypes.GET_MOVIES_TRENDING_ERROR:
      return {
        ...state,
        isLoading: false,
        errorGetMoviesTrending: true,
      };
    default:
      return state;
  }
};

export default reducer;
