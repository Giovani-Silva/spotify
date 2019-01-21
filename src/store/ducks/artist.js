/** TYPES */
export const Types = {
  GET_REQUEST: 'me/GET_REQUEST',
  GET_SUCCESS: 'me/GET_SUCCESS',
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
  successData: (info, albums) => ({ type: Types.GET_SUCCESS, payload: { info, albums } }),
};
