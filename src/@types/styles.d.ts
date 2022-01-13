import 'styled-components';

type ColorProps = {
  BACKGROUND: string;
};

type SipeProps = {
  ICON_SIZE: number;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    Colors: ColorProps;
    Sizes: SizeProps;
  }
}
