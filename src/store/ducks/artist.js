/** TYPES */
export const Types = {
  GET_REQUEST: 'artist/GET_REQUEST',
  GET_SUCCESS: 'artist/GET_SUCCESS',
};

/** * REDUCER  */
const INITIAL_STATE = {
  info: {},
  albums: [],
};
export default function artist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state };

    case Types.GET_SUCCESS:
      return {
        ...state,
        info: { ...action.payload.info },
        albums: [...action.payload.albums.items],
      };

    default:
      return state;
  }
}

/** * ACTIONS  */
export const Creators = {
  artistRequest: (id, token) => ({ type: Types.GET_REQUEST, payload: { id, token } }),
  artistSuccess: (info, albums) => ({
    type: Types.GET_SUCCESS,
    payload: {
      info,
      albums,
    },
  }),
};
