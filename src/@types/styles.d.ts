import 'styled-components';

type ColorProps = {
  BACKGROUND: string;
  BACKGROUND_THEME: string;
  BACKGROUND_HEADER: string;
  BACKGROUND_MODAL: string;
  BACKGROUND_MENU_SELECTED: string;
  FONT_COLOR_MODAL: string;
  FONT_COLOR_DARK: string;
  ICON_COLOR: string;
  ICON_COLOR_HEADER: string;
  INPUT_BORDER_COLOR: string;
  PLACEHOLDER_INPUT_COLOR: string;
  BUTTON_COLOR: string;
  BUTTON_COLOR_DISABLED: string;
  BORDER_BUTTON_COLOR: string;
  TEXT_INPUT_COLOR: string;
  TEXT_ERROR_COLOR: string;
  TEXT_CLICKABLE: string;
  TEXT_USERNAME_PRIMARY: string;
  TEXT_USERNAME_SECONDARY: string;
  SEARCH_BAR_COLOR: string;
};

type SizeProps = {
  ICON_SIZE: number;
  ICON_SIZE_HEADER: number;
  ICON_SIZE_MENU: number;
  INPUT_SIZE: number;
  TEXT_SIZE_TITLE: number;
  TEXT_SIZE_SUBTITLE: number;
  TEXT_SIZE_USERNAME_PRIMARY: number;
  TEXT_SIZE_USERNAME_SECONDARY: number;
  FONTSIZE_SEARCH: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorProps;
    Sizes: SizeProps;
  }
}
