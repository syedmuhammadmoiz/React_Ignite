import axios from "axios";
import {
  popularGameUrl,
  upcomingGameUrl,
  newGamesUrl,
  searchGameUrl,
} from "../api";
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

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameUrl(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      seacrhed: searchGames.data.results,
    },
  });
};
