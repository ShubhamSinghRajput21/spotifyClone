export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQBJcYT2U4pOR2ujpbLrHQYNgST17X9i8tQLuI6_PduRVs2zt1AFEVcGjAlUJF7eNt_WeODa42eh2xDrkg3x_p7UAzrmVxjbi_fAwfeGsFVq0as3IE96FHF0le50lI7doq8Pa1SZTZi3ea8z9RSsQIzTd4J__IjYINo4SY4pOt2JHkoQ",
  //"BQBJcYT2U4pOR2ujpbLrHQYNgST17X9i8tQLuI6_PduRVs2zt1AFEVcGjAlUJF7eNt_WeODa42eh2xDrkg3x_p7UAzrmVxjbi_fAwfeGsFVq0as3IE96FHF0le50lI7doq8Pa1SZTZi3ea8z9RSsQIzTd4J__IjYINo4SY4pOt2JHkoQ"
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
