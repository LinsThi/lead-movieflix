import type { Action } from 'typesafe-actions';

export enum MovieComingTypes {
  GET_MOVIES_COMING_SUCCESS = '@movies/GET_MOVIES_COMING_SUCCESS',
  GET_MOVIES_COMING = '@movies/GET_MOVIES_COMING',
  GET_MOVIES_COMING_ERROR = '@movies/GET_MOVIES_COMING_ERROR',
}

export interface MovieComingState {
  listMoviesComing: any;
  isLoading: boolean;
  errorGetMoviesComing: boolean;
}

export interface GetMoviesComingProps extends Action {
  type: MovieComingTypes.GET_MOVIES_COMING;
  payload: { page: number };
}

export interface GetMoviesComingSuccessProps extends Action {
  type: MovieComingTypes.GET_MOVIES_COMING_SUCCESS;
  payload: { listMoviesComing: any };
}

export interface GetMoviesComingErrorProps extends Action {
  type: MovieComingTypes.GET_MOVIES_COMING_ERROR;
}
