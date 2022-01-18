import { action } from 'typesafe-actions';

import type {
  GetMoviesComingProps,
  GetMoviesComingSuccessProps,
  GetMoviesComingErrorProps,
} from './types';
import { MovieComingTypes } from './types';

export const getMoviesComingAction = (page: number): GetMoviesComingProps =>
  action(MovieComingTypes.GET_MOVIES_COMING, { page });

export const getMoviesComingSuccessAction = (
  listMoviesComing: any,
): GetMoviesComingSuccessProps =>
  action(MovieComingTypes.GET_MOVIES_COMING_SUCCESS, {
    listMoviesComing,
  });

export const getMoviesComingErrorAction = (): GetMoviesComingErrorProps =>
  action(MovieComingTypes.GET_MOVIES_COMING_ERROR);
