import { combineReducers } from 'redux';

import movieComing from '~/modules/Movie/store/ducks/movieComing';
import movieTrending from '~/modules/Movie/store/ducks/movieTrending';
import movieCategory from '~/modules/Search/store/ducks/movieCategory';
import movieSearch from '~/modules/Search/store/ducks/movieSearch';

import font from './font';
import theme from './theme';
import user from './user';

export default combineReducers({
  font,
  theme,
  user,
  movieCategory,
  movieSearch,
  movieTrending,
  movieComing,
});
