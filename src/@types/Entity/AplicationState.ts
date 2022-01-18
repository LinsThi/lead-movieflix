import type { MovieComingState } from '~/modules/Movie/store/ducks/movieComing/types';
import type { MovieTrendingState } from '~/modules/Movie/store/ducks/movieTrending/types';
import type { FontState } from '~/shared/store/ducks/font/types';
import type { MovieState } from '~/shared/store/ducks/movie/types';
import type { ThemeState } from '~/shared/store/ducks/theme/types';
import type { UserState } from '~/shared/store/ducks/user/types';

export interface AplicationState {
  font: FontState;
  theme: ThemeState;
  user: UserState;
  movie: MovieState;
  movieTrending: MovieTrendingState;
  movieComing: MovieComingState;
}
