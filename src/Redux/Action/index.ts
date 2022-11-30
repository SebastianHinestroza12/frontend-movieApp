import axios from "axios";

export const getAllMovie = () => {
  return async function (dispatch: any) {
    let json = await axios.get(`http://localhost:3001/movies`);
    return dispatch({
      type: "GET_MOVIES",
      payload: json.data,
    });
  };
};
