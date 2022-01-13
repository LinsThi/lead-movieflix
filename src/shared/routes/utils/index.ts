import { LIGHT } from '~/shared/constants/theme';
import themeProvider from '~/shared/themes';

export const createTheme = (theme: string) =>
  theme === LIGHT ? themeProvider.light : themeProvider.dark;
