import type { MovieComingState } from '~/modules/Movie/store/ducks/movieComing/types';
import type { MovieTrendingState } from '~/modules/Movie/store/ducks/movieTrending/types';
import type { CategoryState } from '~/modules/Search/store/ducks/movieCategory/types';
import type { MovieState } from '~/modules/Search/store/ducks/movieSearch/types';
import type { FontState } from '~/shared/store/ducks/font/types';
import type { ThemeState } from '~/shared/store/ducks/theme/types';
import type { UserState } from '~/shared/store/ducks/user/types';

export interface AplicationState {
  font: FontState;
  theme: ThemeState;
  user: UserState;
  movieCategory: CategoryState;
  movieSearch: MovieState;
  movieTrending: MovieTrendingState;
  movieComing: MovieComingState;
}
