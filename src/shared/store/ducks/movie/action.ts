import { action } from 'typesafe-actions';

import type {
  GetMoviesErrorProps,
  GetMoviesProps,
  GetMoviesRestoreProps,
  GetMoviesSuccessProps,
} from './types';
import { MovieTypes } from './types';

export const getMoviesAction = (query: string, page: number): GetMoviesProps =>
  action(MovieTypes.GET_MOVIES, { query, page });

export const getMoviesSuccessAction = (
  listMovies: any,
): GetMoviesSuccessProps =>
  action(MovieTypes.GET_MOVIES_SUCCESS, { listMovies });

export const getMoviesErrorAction = (): GetMoviesErrorProps =>
  action(MovieTypes.GET_MOVIES_ERROR);

export const movieRestoreAction = (): GetMoviesRestoreProps =>
  action(MovieTypes.MOVIES_RESTORE);
