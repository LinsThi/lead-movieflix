import type { Reducer } from 'redux';

import type { CategoryState } from './types';
import { CategoryTypes } from './types';

const INITIAL_STATE: CategoryState = {
  categorySelected: {
    id: 0,
    name: '',
  },
  listCategory: [],
  isLoading: false,
  errorGetCategory: false,
};

const reducer: Reducer<CategoryState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case CategoryTypes.GET_CATEGORY:
      return {
        ...state,
        isLoading: true,
      };
    case CategoryTypes.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        listCategory: payload.listCategory,
        isLoading: false,
      };
    case CategoryTypes.GET_CATEGORY_ERROR:
      return {
        ...state,
        isLoading: false,
        errorGetCategory: true,
      };
    case CategoryTypes.SET_SELECTED_CATEGORY:
      return {
        ...state,
        categorySelected: payload.category,
      };
    default:
      return state;
  }
};

export default reducer;
