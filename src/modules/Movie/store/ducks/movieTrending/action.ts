import { action } from 'typesafe-actions';

import type {
  GetMoviesTrendingProps,
  GetMoviesTrendingSuccessProps,
  GetMoviesTrendingErrorProps,
} from './types';
import { MovieTrendingTypes } from './types';

export const getMoviesTrendingAction = (): GetMoviesTrendingProps =>
  action(MovieTrendingTypes.GET_MOVIES_TRENDING);

export const getMoviesTrendingSuccessAction = (
  listMoviesTrending: any,
): GetMoviesTrendingSuccessProps =>
  action(MovieTrendingTypes.GET_MOVIES_TRENDING_SUCCESS, {
    listMoviesTrending,
  });

export const getMoviesTrendingErrorAction = (): GetMoviesTrendingErrorProps =>
  action(MovieTrendingTypes.GET_MOVIES_TRENDING_ERROR);
