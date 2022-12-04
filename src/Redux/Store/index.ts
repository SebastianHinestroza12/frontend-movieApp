import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { reducerMovies } from "../Slice/movie";
import { reducerUser } from "../Slice/user";

export const store = configureStore({
  reducer: {
    movies: reducerMovies,
    users: reducerUser,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
