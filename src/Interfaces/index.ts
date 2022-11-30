export interface IMovie {
  _id: string;
  title: string;
  description: string;
  rating: number;
  popularity?: number;
  release: string;
  poster_path: string;
  genres?: string[];
  poster_details: string;
  adult: boolean;
  date?: Date;
}

export interface TypeMovies {
  movies: IMovie[];
}
