/** TYPES */
export const Types = {
  GET_REQUEST: 'album/GET_REQUEST',
  GET_SUCCESS: 'album/GET_SUCCESS',
  ALBUM_SELECTED: 'album/ALBUM_SELECTED',
};

/** * REDUCER  */
const INITIAL_STATE = {
  album: {},
  tracks: [],
};
export default function album(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state };

    case Types.GET_SUCCESS:
      return {
        ...state,
        tracks: [...action.payload.tracks.items],
      };

    case Types.ALBUM_SELECTED:
      return {
        ...state,
        album: { ...action.payload.selected },
      };

    default:
      return state;
  }
}

/** * ACTIONS  */
export const Creators = {
  albumRequest: (id, token) => ({ type: Types.GET_REQUEST, payload: { id, token } }),
  albumSelected: selected => ({ type: Types.ALBUM_SELECTED, payload: { selected } }),
  albumSuccess: tracks => ({
    type: Types.GET_SUCCESS,
    payload: { tracks },
  }),
};
