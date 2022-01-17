export interface GenreMovie {
  id: number;
  name: string;
}

export interface ProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genres: GenreMovie;
  id: number;
  original_title: string;
  title: string;
  overview: string;
  popularity: number;
  poster_path: number;
  release_date: string;
  production_companies: ProductionCompanies;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
