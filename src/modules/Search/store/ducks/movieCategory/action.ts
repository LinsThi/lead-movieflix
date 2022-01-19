import { action } from 'typesafe-actions';

import type {
  GetCategoryProps,
  GetCategorySuccessProps,
  GetCategoryErrorProps,
  SetCategorySelectedProps,
} from './types';
import { CategoryTypes } from './types';

export const getCategoryAction = (): GetCategoryProps =>
  action(CategoryTypes.GET_CATEGORY);

export const getCategorySuccessAction = (
  listCategory: any,
): GetCategorySuccessProps =>
  action(CategoryTypes.GET_CATEGORY_SUCCESS, { listCategory });

export const getCategoryErrorAction = (): GetCategoryErrorProps =>
  action(CategoryTypes.GET_CATEGORY_ERROR);

export const setCategorySelectedAction = (
  category: any,
): SetCategorySelectedProps =>
  action(CategoryTypes.SET_SELECTED_CATEGORY, { category });
