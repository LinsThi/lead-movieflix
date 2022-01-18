import { combineReducers } from 'redux';

import movieComing from '~/modules/Movie/store/ducks/movieComing';
import movieTrending from '~/modules/Movie/store/ducks/movieTrending';

import font from './font';
import movie from './movie';
import theme from './theme';
import user from './user';

export default combineReducers({
  font,
  theme,
  user,
  movie,
  movieTrending,
  movieComing,
});
