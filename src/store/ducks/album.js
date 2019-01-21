/** TYPES */
export const Types = {
  GET_REQUEST: 'album/GET_REQUEST',
  GET_SUCCESS: 'album/GET_SUCCESS',
};

/** * REDUCER  */
const INITIAL_STATE = {
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

    default:
      return state;
  }
}

/** * ACTIONS  */
export const Creators = {
  albumRequest: (id, token) => ({ type: Types.GET_REQUEST, payload: { id, token } }),
  albumSuccess: tracks => ({
    type: Types.GET_SUCCESS,
    payload: { tracks },
  }),
};
