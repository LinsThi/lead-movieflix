import { action } from 'typesafe-actions';

import type { ToogleThemeProps } from './types';
import { ThemeTypes } from './types';

export const toogleThemeAction = (): ToogleThemeProps =>
  action(ThemeTypes.TOOGLE_THEME);
