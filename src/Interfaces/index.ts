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
export interface ICard {
  // _id: string;
  title: string;
  // rating: number;
  release: string;
  poster_details: string;
  rating: number;
}

export interface TypeMovies {
  movies: IMovie[];
}

export interface IUser {
  name: string;
  email: string;
  passport: string;
  repitePassword: string;
}
