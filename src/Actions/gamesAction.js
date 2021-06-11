import axios from "axios";
import { popularGameUrl, upcomingGameUrl, newGamesUrl } from "../api";
n;
export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGameUrl());
  const upcomingData = await axios.get(upcomingGameUrl());
  const newGamesData = await axios.get(newGamesUrl());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
