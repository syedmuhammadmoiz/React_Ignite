const base_url = `https://api.rawg.io/api/games`;
const key = `?key=${process.env.REACT_APP_API_KEY}`;
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGameUrl = () => `${base_url}${key}&${popular_games}`;
export const upcomingGameUrl = () => `${base_url}${key}&${upcoming_games}`;
export const newGamesUrl = () => `${base_url}${key}&${newGames}`;

export const gameDetailsURL = (game_id) => `${base_url}/${game_id}${key}`;
export const gameScreenshotsURL = (game_id) => {
  return `${base_url}/${game_id}/screenshots${key}`;
};
