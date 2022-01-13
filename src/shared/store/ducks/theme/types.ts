import type { Action } from 'typesafe-actions';

export enum ThemeTypes {
  TOOGLE_THEME = '@theme/TOOGLE_THEME',
}

export interface ThemeState {
  theme: string;
}

export interface ToogleThemeProps extends Action {
  type: ThemeTypes.TOOGLE_THEME;
}
