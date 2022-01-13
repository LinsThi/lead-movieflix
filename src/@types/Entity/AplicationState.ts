import type { FontState } from '~/shared/store/ducks/font/types';
import type { ThemeState } from '~/shared/store/ducks/theme/types';

export interface AplicationState {
  font: FontState;
  theme: ThemeState;
}
