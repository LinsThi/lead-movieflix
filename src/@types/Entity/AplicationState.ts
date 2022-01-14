import type { FontState } from '~/shared/store/ducks/font/types';
import type { ThemeState } from '~/shared/store/ducks/theme/types';
import type { UserState } from '~/shared/store/ducks/user/types';

export interface AplicationState {
  font: FontState;
  theme: ThemeState;
  user: UserState;
}
