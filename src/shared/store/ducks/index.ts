import { combineReducers } from 'redux';

import font from './font';
import movie from './movie';
import theme from './theme';
import user from './user';

export default combineReducers({ font, theme, user, movie });
