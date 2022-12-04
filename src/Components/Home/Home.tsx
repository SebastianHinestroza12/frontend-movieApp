import { Poster } from "../Poster/Poster";
import { CardMovie } from "../Card/Card";
import { getAllMovies } from "../../Redux/Slice/movie";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/hook";
import { useEffect } from "react";
import "./Home.css";

export const Home = () => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movies.movies);
  const poster = movie[23];
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);
  return (
    <div>
      <Poster
        path={poster?.poster_path}
        title={poster?.title}
        release={poster?.release}
        reating={poster?.rating}
        genres={poster?.genres}
        poster_details={poster?.poster_details}
        description={poster?.description}
      />
      <div className="prueba">
        {movie.map((data) => {
          return (
            <CardMovie
              title={data.title}
              release={data.release}
              poster_details={data.poster_details}
              rating={data.rating}
            />
          );
        })}
      </div>
    </div>
  );
};
