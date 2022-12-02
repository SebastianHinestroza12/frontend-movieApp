import { useEffect } from "react";
import { Navbar } from "../Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../Redux/Store/hook";
import { getAllMovies } from "../../Redux/Slice/movie";

export const Poster = () => {
  const dispatch: any = useAppDispatch();
  const alMovie = useAppSelector((state) => state.movies.movies);
  const onePoster = alMovie[0];
  console.log(onePoster);
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
    </div>
  );
};
