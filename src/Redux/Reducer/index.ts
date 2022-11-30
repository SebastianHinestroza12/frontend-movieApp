import { TypeMovies } from "../../Interfaces";

const initialState: TypeMovies = {
  movies: [],
};

export const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
      };

    default:
      return state;
  }
};
