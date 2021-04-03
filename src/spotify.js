//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

//It will take the user to spotify Login page
export const authEndpoint = "https://accounts.spotify.com/authorize";

//It redirects to home page after Login
const redirectUri = "http://localhost:3000/";

//Client Id
const clientId = "0b2836de6bbd48c68fb4ecb0b9cc8d2b";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
