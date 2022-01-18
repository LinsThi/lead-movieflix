import type { Action } from 'typesafe-actions';

export enum MovieTrendingTypes {
  GET_MOVIES_TRENDING_SUCCESS = '@movies/GET_MOVIES_TRENDING_SUCCESS',
  GET_MOVIES_TRENDING = '@movies/GET_MOVIES_TRENDING',
  GET_MOVIES_TRENDING_ERROR = '@movies/GET_MOVIES_TRENDING_ERROR',
}

export interface MovieTrendingState {
  listMoviesTrending: any;
  isLoading: boolean;
  errorGetMoviesTrending: boolean;
}

export interface GetMoviesTrendingProps extends Action {
  type: MovieTrendingTypes.GET_MOVIES_TRENDING;
}

export interface GetMoviesTrendingSuccessProps extends Action {
  type: MovieTrendingTypes.GET_MOVIES_TRENDING_SUCCESS;
  payload: { listMoviesTrending: any };
}

export interface GetMoviesTrendingErrorProps extends Action {
  type: MovieTrendingTypes.GET_MOVIES_TRENDING_ERROR;
}
