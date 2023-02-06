export interface IGenres {
  id: number;
  name: string;
}

interface IProductionCompanies {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

export interface IMovie {
  id: number;
  adult: boolean;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres?: IGenres[];
  tagline?: string;
  runtime?: number;
  backdrop_path?: string;
  production_companies?: IProductionCompanies[];
}
