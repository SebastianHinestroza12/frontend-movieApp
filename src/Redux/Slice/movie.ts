import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { TypeMovies } from "../../Interfaces";

const initialState: TypeMovies = {
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMoviesList: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMoviesList } = moviesSlice.actions;
export const reducerMovies = moviesSlice.reducer;

export const getAllMovies = () => {
  return async function (AppDispatch: any) {
    let json = await axios.get("http://localhost:3001/movies");
    return AppDispatch(setMoviesList(json.data));
  };
};

export const postUser = (userData: any) => {
  return async function (AppDispatch: any) {
    let json = await axios.post("http://localhost:3001/register", userData);
    return AppDispatch(json.data);
  };
};
