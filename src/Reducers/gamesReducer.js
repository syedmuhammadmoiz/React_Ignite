const initalState = {
  upcoming: [],
  newGames: [],
  popular: [],
  seacrhed: [],
};

const gamesReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
