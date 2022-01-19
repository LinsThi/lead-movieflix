import type { Action } from 'typesafe-actions';

export enum MovieTypes {
  GET_MOVIES_SUCCESS = '@movies/GET_MOVIES_SUCCESS',
  GET_MOVIES = '@movies/GET_MOVIES',
  GET_MOVIES_ERROR = '@movies/GET_MOVIES_ERROR',
  MOVIES_RESTORE = '@movies/MOVIES_RESTORE',
}

export interface MovieState {
  listMovies: any;
  getLoading: boolean;
  errorGetMovies: boolean;
}

export interface GetMoviesProps extends Action {
  type: MovieTypes.GET_MOVIES;
  payload: { query: string; page: number };
}

export interface GetMoviesSuccessProps extends Action {
  type: MovieTypes.GET_MOVIES_SUCCESS;
  payload: { listMovies: any };
}

export interface GetMoviesErrorProps extends Action {
  type: MovieTypes.GET_MOVIES_ERROR;
}
