const base = "/react-spotify-clone";

export const routes = {
  HOME: base,
  LOGIN: `${base}/login`,
  SEARCH: `${base}/search`,
  PLAYLIST: `${base}/playlist`,
  TRACK: `${base}/track`,
};

export const paths = {
  HOME: routes.HOME,
  LOGIN: routes.LOGIN,
  SEARCH: routes.SEARCH,
  PLAYLIST: `${routes.PLAYLIST}/:playlistId`,
  TRACK: `${routes.TRACK}/:trackId`,
};