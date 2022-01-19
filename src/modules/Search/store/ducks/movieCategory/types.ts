import type { Action } from 'typesafe-actions';

import type { GenreMovie } from '~/modules/Movie/dtos/Movie';

export enum CategoryTypes {
  GET_CATEGORY_SUCCESS = '@category/GET_CATEGORY_SUCCESS',
  GET_CATEGORY = '@category/GET_CATEGORY',
  GET_CATEGORY_ERROR = '@category/GET_CATEGORY_ERROR',
  SET_SELECTED_CATEGORY = '@category/SET_SELECTED_CATEGORY',
}

export interface CategoryState {
  listCategory: any;
  categorySelected: GenreMovie;
  isLoading: boolean;
  errorGetCategory: boolean;
}

export interface GetCategoryProps extends Action {
  type: CategoryTypes.GET_CATEGORY;
}

export interface GetCategorySuccessProps extends Action {
  type: CategoryTypes.GET_CATEGORY_SUCCESS;
  payload: { listCategory: any };
}

export interface GetCategoryErrorProps extends Action {
  type: CategoryTypes.GET_CATEGORY_ERROR;
}

export interface SetCategorySelectedProps extends Action {
  type: CategoryTypes.SET_SELECTED_CATEGORY;
  payload: { category: any };
}
