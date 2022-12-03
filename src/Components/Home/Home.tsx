import { Poster } from "../Poster/Poster";
import { CardMovie } from "../Card/Card";
import { getAllMovies } from "../../Redux/Slice/movie";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/hook";
import { useEffect } from "react";
import "./Home.css";

export const Home = () => {
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movies.movies);
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);
  return (
    <div>
      <Poster />
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
